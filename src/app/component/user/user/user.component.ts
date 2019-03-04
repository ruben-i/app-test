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

  delete(id:string){
    this.userService.delete(id).subscribe(response =>{
        this.users=this.users.filter(user =>user.id!=id);
    });
  }

  search(texto:string){
    this.userService.getUsers().subscribe(
      (response:UserModel[]) => {
          this.users=response.filter(prod => prod.name.toUpperCase().includes(texto.toUpperCase()) );
      }
  );

  }

}
