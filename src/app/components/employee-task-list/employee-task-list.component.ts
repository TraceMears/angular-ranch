import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/common/task';
import { User } from 'src/app/common/user';
import { CompletedTasksService } from 'src/app/services/completed-tasks.service';
import { TaskService } from 'src/app/services/task.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-employee-task-list',
  templateUrl: './employee-task-list.component.html',
  styleUrls: ['./employee-task-list.component.css']
})
export class EmployeeTaskListComponent implements OnInit {
  
  currentTask: Task = new Task();

  curUserId: number;
  activeList: Task[];
  allTaskList: Task[];

  constructor(private taskService: TaskService, private tst: TokenStorageService, private cts: CompletedTasksService) { }

  ngOnInit(): void {
    this.listActive();
  }

  listActive(){
    this.taskService.getActiveTasks().subscribe(
      data => {
        this.activeList = data;
      }
    )
  }

  taskCompleted(task: Task) {
 
    this.curUserId = this.tst.getId();
    console.log(this.curUserId);
    
    this.taskService.setTaskInactive(task);

    this.cts.addCompletedTask(task.task_id, this.curUserId);

    this.listActive();
    // window.location.reload();
  }

}
