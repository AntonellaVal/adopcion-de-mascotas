import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnimalePage } from './animale.page';

describe('AnimalePage', () => {
  let component: AnimalePage;
  let fixture: ComponentFixture<AnimalePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
