import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilitatiPage } from './facilitati.page';

describe('FacilitatiPage', () => {
  let component: FacilitatiPage;
  let fixture: ComponentFixture<FacilitatiPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacilitatiPage],
    }).compileComponents();

    fixture = TestBed.createComponent(FacilitatiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
