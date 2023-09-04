import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalLatinFoodComponent } from './modal-latin-food.component';

describe('ModalLatinFoodComponent', () => {
  let component: ModalLatinFoodComponent;
  let fixture: ComponentFixture<ModalLatinFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalLatinFoodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalLatinFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
