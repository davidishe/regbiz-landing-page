import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationFormLayoutComponent } from './registration-form-layout.component';

describe('RegistrationFormLayoutComponent', () => {
  let component: RegistrationFormLayoutComponent;
  let fixture: ComponentFixture<RegistrationFormLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationFormLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationFormLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
