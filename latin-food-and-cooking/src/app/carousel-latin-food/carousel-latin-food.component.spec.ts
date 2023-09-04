import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselLatinFoodComponent } from './carousel-latin-food.component';

describe('CarouselLatinFoodComponent', () => {
  let component: CarouselLatinFoodComponent;
  let fixture: ComponentFixture<CarouselLatinFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselLatinFoodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselLatinFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
