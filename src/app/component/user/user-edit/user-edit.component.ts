import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { UserService } from '../../../service/user.service';
import { UserModel } from '../../../model/usuario.model';
@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  id:string;
  userEdit:UserModel;

  constructor(private router:Router,private route:ActivatedRoute,private userService:UserService) { }

  ngOnInit() {
    this.id=this.route.snapshot.paramMap.get("id");
    this.userService.getUserById(this.id).subscribe((response:UserModel) => this.userEdit=response);
    
  }

  updateUser(user:UserModel){
    console.log("actualizar ",user);
    this.userService.update(this.userEdit).subscribe(response =>{
        this.router.navigate(["/"]);
    });
  }
}
