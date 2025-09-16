import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcasaPage } from './acasa.page';

describe('AcasaPage', () => {
  let component: AcasaPage;
  let fixture: ComponentFixture<AcasaPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcasaPage],
    }).compileComponents();

    fixture = TestBed.createComponent(AcasaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
