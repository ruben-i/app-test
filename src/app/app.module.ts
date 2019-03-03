import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {routes} from './app.routing';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { UserComponent } from './component/user/user/user.component';
import { UserListComponent } from './component/user/user-list/user-list.component';
import { UserEditComponent } from './component/user/user-edit/user-edit.component';
import { UserNewComponent } from './component/user/user-new/user-new.component';
import { UserFormComponent } from './component/user/user-form/user-form.component';
import { HeaderComponent } from './component/main/header/header.component';
import { UserService } from './service/user.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
    UserListComponent,
    UserEditComponent,
    UserNewComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
