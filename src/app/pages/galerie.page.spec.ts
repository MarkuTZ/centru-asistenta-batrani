import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleriePage } from './galerie.page';

describe('GaleriePage', () => {
  let component: GaleriePage;
  let fixture: ComponentFixture<GaleriePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GaleriePage],
    }).compileComponents();

    fixture = TestBed.createComponent(GaleriePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
