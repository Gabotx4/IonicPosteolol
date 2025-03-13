import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormpostPage } from './formpost.page';

describe('FormpostPage', () => {
  let component: FormpostPage;
  let fixture: ComponentFixture<FormpostPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FormpostPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
