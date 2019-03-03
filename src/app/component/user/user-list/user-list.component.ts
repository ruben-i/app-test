import { Component, OnInit, Input } from '@angular/core';
import { UserModel } from 'src/app/model/usuario.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  @Input() userList:UserModel[];
  titles:string[];
  constructor() { 
    this.titles=["id","name","email","role","age","options"];
  }

  ngOnInit() {
  }

}
