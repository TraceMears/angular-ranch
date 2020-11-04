import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TasksCompleted } from '../common/tasks-completed';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; 
import { Employee } from '../common/employee';

@Injectable({
  providedIn: 'root'
})
export class CompletedTasksService {

  private postId;
  private postUrl = 'http://localhost:8080/ranch/tasksCompleteds'; 
  private completedTask = new TasksCompleted();

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': `${sessionStorage.getItem('auth-token')}`
      })
  };

  addCompletedTask(taskId: number, empId: number) {
    
    this.completedTask.taskId = taskId;
    this.completedTask.empId = empId;
    const now = new Date();
    this.completedTask.timeCompleted = now;
    console.log(this.completedTask);

    this.httpClient.post<any>(this.postUrl, this.completedTask, this.httpOptions).subscribe( data => {this.postId = data.id});

  }

  selectEmployeeTasks(emp: Employee): Observable<TasksCompleted[]> {
    const empUrl = `http://localhost:8080/ranch/tasksCompleteds/search/findByEmpId?id=${emp.emp_id}`;
    
    return this.httpClient.get<GetResponse>(empUrl).pipe(
                                                    map( response => response._embedded.tasksCompleteds)
                                                    );
  }

  getTCs(emp: Employee): Observable<TasksCompleted[]> {
    console.log(emp);
    const url = `http://localhost:8080/ranch/tasksCompleteds/search/findTasks?id=${emp.id}`;

    return this.httpClient.get<GetResponse>(url).pipe(
                                                map( response => response._embedded.tasksCompleteds)
                                                );
  }
}

interface GetResponse {
  _embedded: {
    tasksCompleteds: TasksCompleted[];
  }  
}