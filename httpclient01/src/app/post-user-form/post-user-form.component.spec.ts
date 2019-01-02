import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostUserFormComponent } from './post-user-form.component';

describe('PostUserFormComponent', () => {
  let component: PostUserFormComponent;
  let fixture: ComponentFixture<PostUserFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostUserFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostUserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
