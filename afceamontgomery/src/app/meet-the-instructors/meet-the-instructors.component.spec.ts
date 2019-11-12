import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetTheInstructorsComponent } from './meet-the-instructors.component';

describe('MeetTheInstructorsComponent', () => {
  let component: MeetTheInstructorsComponent;
  let fixture: ComponentFixture<MeetTheInstructorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetTheInstructorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetTheInstructorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
