import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonFormulaireComponent } from './mon-formulaire.component';

describe('MonFormulaireComponent', () => {
  let component: MonFormulaireComponent;
  let fixture: ComponentFixture<MonFormulaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonFormulaireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonFormulaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
