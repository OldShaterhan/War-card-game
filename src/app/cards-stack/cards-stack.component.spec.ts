import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsStackComponent } from './cards-stack.component';

describe('CardsStackComponent', () => {
  let component: CardsStackComponent;
  let fixture: ComponentFixture<CardsStackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsStackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsStackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
