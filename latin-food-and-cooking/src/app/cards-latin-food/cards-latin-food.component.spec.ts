import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsLatinFoodComponent } from './cards-latin-food.component';

describe('CardsLatinFoodComponent', () => {
  let component: CardsLatinFoodComponent;
  let fixture: ComponentFixture<CardsLatinFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsLatinFoodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsLatinFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
