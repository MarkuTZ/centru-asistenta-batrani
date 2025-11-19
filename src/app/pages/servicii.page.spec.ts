import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciiPage } from './servicii.page';

describe('ServiciiPage', () => {
  let component: ServiciiPage;
  let fixture: ComponentFixture<ServiciiPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiciiPage],
    }).compileComponents();

    fixture = TestBed.createComponent(ServiciiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
