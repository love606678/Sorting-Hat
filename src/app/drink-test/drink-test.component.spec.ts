import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkTestComponent } from './drink-test.component';

describe('DrinkTestComponent', () => {
  let component: DrinkTestComponent;
  let fixture: ComponentFixture<DrinkTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrinkTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrinkTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
