import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; 
import { Task } from '../common/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private activeUrl = 'http://localhost:8080/ranch/tasks/search/findByActiveTrue';  
  private inactiveUrl = 'http://localhost:8080/ranch/tasks/search/findByActiveFalse';
   

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': `${sessionStorage.getItem('auth-token')}`
      })
  };

  putHeader = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': `${sessionStorage.getItem('auth-token')}`,
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,OPTIONS',

      })
  };

  newTask(newTask: Task){
    
    const addTaskUrl = 'http://localhost:8080/ranch/tasks';

    if(newTask!=null) {      
      
      console.log(newTask);

      this.httpClient.post(addTaskUrl, newTask, this.httpOptions).subscribe();
    } 
  }

  getActiveTasks(): Observable<Task[]> {
    return this.httpClient.get<GetResponse>(this.activeUrl).pipe(
                                            map(response => response._embedded.tasks)
                                            );    
  }

  getInactiveTasks(): Observable<Task[]> {
    return this.httpClient.get<GetResponse>(this.inactiveUrl).pipe(
                                            map(response => response._embedded.tasks)
                                            );    
  }

  getAllTasks(): Observable<Task[]> {
    return this.httpClient.get<GetResponse>('http://localhost:8080/ranch/tasks').pipe(
                                            map(response => response._embedded.tasks)
                                            );    
  }

  setTaskInactive(task: Task) {
    
    const putUrl = `http://localhost:8080/ranch/tasks/${task.task_id}?callback=anything`;
    
    if(task!=null) {      
      
      task.active = false;
      console.log(task);

      this.httpClient.put(putUrl, task, this.putHeader).subscribe();
    }    
  }

  setTaskActive(task: Task) {
    
    const putUrl = `http://localhost:8080/ranch/tasks/${task.task_id}`;
    
    if(task!=null) {      
      
      task.active = true;
      console.log(task);

      this.httpClient.put(putUrl, task, this.putHeader).subscribe();
    }    
  }
}

interface GetResponse {
  _embedded: {
    tasks: Task[];
  }  
}