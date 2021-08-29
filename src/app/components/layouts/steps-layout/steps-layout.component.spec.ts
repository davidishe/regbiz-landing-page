import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepsLayoutComponent } from './steps-layout.component';

describe('StepsLayoutComponent', () => {
  let component: StepsLayoutComponent;
  let fixture: ComponentFixture<StepsLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepsLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
