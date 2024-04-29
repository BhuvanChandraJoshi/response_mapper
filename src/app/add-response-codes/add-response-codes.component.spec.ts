import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddResponseCodesComponent } from './add-response-codes.component';

describe('AddResponseCodesComponent', () => {
  let component: AddResponseCodesComponent;
  let fixture: ComponentFixture<AddResponseCodesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddResponseCodesComponent]
    });
    fixture = TestBed.createComponent(AddResponseCodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
