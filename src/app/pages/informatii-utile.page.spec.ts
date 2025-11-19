import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformatiiUtilePage } from './informatii-utile.page';

describe('InformatiiUtilePage', () => {
  let component: InformatiiUtilePage;
  let fixture: ComponentFixture<InformatiiUtilePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformatiiUtilePage],
    }).compileComponents();

    fixture = TestBed.createComponent(InformatiiUtilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
