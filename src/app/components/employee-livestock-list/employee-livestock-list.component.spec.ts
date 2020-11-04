import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeLivestockListComponent } from './employee-livestock-list.component';

describe('EmployeeLivestockListComponent', () => {
  let component: EmployeeLivestockListComponent;
  let fixture: ComponentFixture<EmployeeLivestockListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeLivestockListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeLivestockListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
