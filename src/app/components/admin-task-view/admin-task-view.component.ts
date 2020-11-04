import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Employee } from 'src/app/common/employee';
import { TasksCompleted } from 'src/app/common/tasks-completed';
import { CompletedTasksService } from 'src/app/services/completed-tasks.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-task-view',
  templateUrl: './admin-task-view.component.html',
  styleUrls: ['./admin-task-view.component.css']
})
export class AdminTaskViewComponent implements OnInit {

  empList: Employee[];
  currentEmployee: Employee = new Employee();
  empTaskList: TasksCompleted[];
  employeeActive = false;

  constructor(private fb: FormBuilder, private userServe: UserService, private ctServe: CompletedTasksService) { }

  ngOnInit(): void {
    this.createEmpList();    
  }

  selectEmployeeFormGroup = this.fb.group({
    employee: []
  }
  );

  createEmpList() {
    this.userServe.getEmployeesList().subscribe(
      data => {
        this.empList = data;
      }
    );
  }

  selectEmployee() {
    this.currentEmployee = this.selectEmployeeFormGroup.get('employee').value;
    console.log(this.currentEmployee);
    this.employeeActive = true;
    this.getTasksCompleted();
    console.log(this.empTaskList);
  }

  getTasksCompleted() {
    console.log(this.currentEmployee);
    this.ctServe.getTCs(this.currentEmployee).subscribe(
      data => {
        this.empTaskList = data;
      }
    );    
  }



}
//need to populate empTaskList once Employee is selected in selectEmployee()