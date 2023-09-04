import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLatinFoodComponent } from './header-latin-food.component';

describe('HeaderLatinFoodComponent', () => {
  let component: HeaderLatinFoodComponent;
  let fixture: ComponentFixture<HeaderLatinFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderLatinFoodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderLatinFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
