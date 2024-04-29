import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewResponseCodeComponent } from './add-new-response-code.component';

describe('AddNewResponseCodeComponent', () => {
  let component: AddNewResponseCodeComponent;
  let fixture: ComponentFixture<AddNewResponseCodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddNewResponseCodeComponent]
    });
    fixture = TestBed.createComponent(AddNewResponseCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
