import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsColourComponent } from './cards-colour.component';

describe('CardsColourComponent', () => {
  let component: CardsColourComponent;
  let fixture: ComponentFixture<CardsColourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsColourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsColourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
