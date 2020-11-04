import { SlicePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Task } from 'src/app/common/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-admin-tasks',
  templateUrl: './admin-tasks.component.html',
  styleUrls: ['./admin-tasks.component.css']
})
export class AdminTasksComponent implements OnInit {

  inactiveList: Task[];
  curTask: Task;

  addTask: Task = new Task();

  constructor( private taskService: TaskService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.listInactive();
  }  

  taskFormGroup = this.fb.group({
    task: []
  }
  );

  addTaskGroup = this.fb.group({
      newTask: ['']  
  }
  );

  newTask() {
    
    this.addTask.task_name = this.addTaskGroup.get('newTask').value;
    this.addTask.active = true;

    this.taskService.newTask(this.addTask);

    window.location.reload();
  }

  listInactive(){
    this.taskService.getInactiveTasks().subscribe(
      data => {
        this.inactiveList = data;
      }
    );
  }

  setActiveTask(){
    this.curTask = this.taskFormGroup.get('task').value;
    console.log(this.curTask);

    this.taskService.setTaskActive(this.curTask);

    this.listInactive();
    window.location.reload();
  }


}
