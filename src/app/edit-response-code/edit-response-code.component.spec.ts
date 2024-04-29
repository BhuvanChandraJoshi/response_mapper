import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditResponseCodeComponent } from './edit-response-code.component';

describe('EditResponseCodeComponent', () => {
  let component: EditResponseCodeComponent;
  let fixture: ComponentFixture<EditResponseCodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditResponseCodeComponent]
    });
    fixture = TestBed.createComponent(EditResponseCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
