import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-board-customer',
  templateUrl: './board-customer.component.html',
  styleUrls: ['./board-customer.component.css']
})
export class BoardCustomerComponent implements OnInit {
  
  content: string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getCustomerBoard().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }

}
