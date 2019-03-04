import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { UserService } from '../../../service/user.service';
import { UserModel } from '../../../model/usuario.model';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.css']
})
export class UserNewComponent implements OnInit {
  newUser:UserModel=new UserModel();

  constructor(private router:Router,private route:ActivatedRoute,private userService:UserService) { }

  ngOnInit() {
  }

  saveUser(user:UserModel){
    this.userService.save(user).subscribe(responser =>{
      this.router.navigate(["/"]);
    });
  }

}
