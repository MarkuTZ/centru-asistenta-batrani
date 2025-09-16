import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DespreNoiPage } from './despre-noi.page';

describe('DespreNoiPage', () => {
  let component: DespreNoiPage;
  let fixture: ComponentFixture<DespreNoiPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DespreNoiPage],
    }).compileComponents();

    fixture = TestBed.createComponent(DespreNoiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
