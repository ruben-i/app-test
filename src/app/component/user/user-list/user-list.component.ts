import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router'
import { UserModel } from 'src/app/model/usuario.model';
import { UserService } from '../../../service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  @Input() userList:UserModel[];
  @Output() deleteUser:EventEmitter<string>=new EventEmitter<string>();
  titles:string[];
  constructor(private router:Router,private userService:UserService) { 
    this.titles=["codigo","nombre","correo","rol","edad","opciones"];
  }

  ngOnInit() {
  }

  handleEdit(user:UserModel){
    console.log("editar ",user);
    this.router.navigate(["edit",user.id]);
  }

  handleDelete(user:UserModel){
    this.deleteUser.emit(user.id);
  }
}
