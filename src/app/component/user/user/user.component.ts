import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../service/user.service';
import { UserModel } from '../../../model/usuario.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users:UserModel[];
  constructor(private userService:UserService) { }

  ngOnInit() {
    this.getUserList();
  }

  getUserList(){
    this.userService.getUsers().subscribe((response:UserModel[]) =>this.users=response);    
  }

}
