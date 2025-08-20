import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-drink-test',
  templateUrl: './drink-test.component.html',
  styleUrls: ['./drink-test.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class DrinkTestComponent {
  questions = [
    {
      text: "你早上起床最想喝什麼？",
      options: [
        { text: "☕ 咖啡", type: "A" },
        { text: "🧋 奶茶", type: "B" },
        { text: "🍹 果汁", type: "C" }
      ]
    },
    {
      text: "假日你最常出現在哪裡？",
      options: [
        { text: "書店", type: "A" },
        { text: "百貨公司", type: "B" },
        { text: "海邊", type: "C" }
      ]
    },
    {
      text: "朋友找你聚會你會？",
      options: [
        { text: "規劃流程", type: "A" },
        { text: "跟著走", type: "B" },
        { text: "到處玩", type: "C" }
      ]
    }
  ];

  results = {
    A: "你是理性實用型！偏好有計畫、有效率的生活。",
    B: "你是溫暖療癒型！喜歡熱鬧和陪伴。",
    C: "你是自由創意型！追求新鮮、無拘無束。"
  };

  current = 0;
  counts: Record<string, number> = { A: 0, B: 0, C: 0 };
  resultText = '';
  showingResult = false;

  fbShare = '';
  lineShare = '';
  twShare = '';

  constructor(private firestore: Firestore) {}

  select(type: string) {
    this.counts[type]++;
    this.current++;
    if (this.current < this.questions.length) return this.renderQuestion();

    this.showResult();
  }

  renderQuestion() {
    // Angular 的模板自動處理
  }

  showResult() {
    // const maxType = Object.keys(this.counts).reduce((a, b) => this.counts[a] > this.counts[b] ? a : b);
    // this.resultText = this.results[maxType];
    this.showingResult = true;

    // // 寫入 Firebase
    // const resultsRef = collection(this.firestore, 'results');
    // addDoc(resultsRef, {
    //   type: maxType,
    //   resultText: this.resultText,
    //   timestamp: Date.now()
    // });

    // 分享網址設定
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(`我的測驗結果：${this.resultText}`);
    this.fbShare = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    this.lineShare = `https://social-plugins.line.me/lineit/share?url=${url}`;
    this.twShare = `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
  }
}
