import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersDeckComponent } from './players-deck.component';

describe('PlayersDeckComponent', () => {
  let component: PlayersDeckComponent;
  let fixture: ComponentFixture<PlayersDeckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayersDeckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersDeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
