import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardColoursComponent } from './card-colours.component';

describe('CardColoursComponent', () => {
  let component: CardColoursComponent;
  let fixture: ComponentFixture<CardColoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardColoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardColoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
