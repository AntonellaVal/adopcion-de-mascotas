import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HoraaPage } from './horaa.page';

describe('HoraaPage', () => {
  let component: HoraaPage;
  let fixture: ComponentFixture<HoraaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HoraaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
