import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterLatinFoodComponent } from './footer-latin-food.component';

describe('FooterLatinFoodComponent', () => {
  let component: FooterLatinFoodComponent;
  let fixture: ComponentFixture<FooterLatinFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterLatinFoodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterLatinFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
