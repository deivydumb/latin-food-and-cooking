import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesLatinFoodComponent } from './detalles-latin-food.component';

describe('DetallesLatinFoodComponent', () => {
  let component: DetallesLatinFoodComponent;
  let fixture: ComponentFixture<DetallesLatinFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesLatinFoodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallesLatinFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
