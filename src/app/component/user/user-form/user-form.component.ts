import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserModel } from '../../../model/usuario.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  @Output() handleSubmit:EventEmitter<UserModel>=new EventEmitter<UserModel>();
  @Input() user:UserModel;
  userForm:FormGroup;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.userForm=this.formBuilder.group({
      name:new FormControl("",[Validators.required]),
      email:new FormControl("",[Validators.required,Validators.email]),
      role:new FormControl("",[Validators.required]),
      years:new FormControl("",[Validators.required,Validators.pattern("[0-9]{1,3}")])
    });

    this.userForm.controls.name.setValue(this.user.name);
    this.userForm.controls.email.setValue(this.user.email);
    this.userForm.controls.role.setValue(this.user.role);
    this.userForm.controls.years.setValue(this.user.years);
  }

  submit(){

    this.user.name=this.userForm.controls.name.value;
    this.user.email=this.userForm.controls.email.value;
    this.user.role=this.userForm.controls.role.value;
    this.user.years=this.userForm.controls.years.value;

    this.handleSubmit.emit(this.user);
  }

}
