import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FichaAnimalesPage } from './ficha-animales.page';

describe('FichaAnimalesPage', () => {
  let component: FichaAnimalesPage;
  let fixture: ComponentFixture<FichaAnimalesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FichaAnimalesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
