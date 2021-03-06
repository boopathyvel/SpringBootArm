import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAnswersComponent } from './student-answers.component';

describe('StudentAnswersComponent', () => {
  let component: StudentAnswersComponent;
  let fixture: ComponentFixture<StudentAnswersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentAnswersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentAnswersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
