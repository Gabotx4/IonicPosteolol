import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostModalPage } from './post-modal.page';

describe('PostModalPage', () => {
  let component: PostModalPage;
  let fixture: ComponentFixture<PostModalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PostModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
