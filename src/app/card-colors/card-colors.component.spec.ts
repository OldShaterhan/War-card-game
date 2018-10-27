import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardColorsComponent } from './card-colors.component';

describe('CardColorsComponent', () => {
  let component: CardColorsComponent;
  let fixture: ComponentFixture<CardColorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardColorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardColorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
