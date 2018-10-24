import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsValueComponent } from './cards-value.component';

describe('CardsValueComponent', () => {
  let component: CardsValueComponent;
  let fixture: ComponentFixture<CardsValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
