import { Route } from '@angular/router';
import { UserComponent } from './component/user/user/user.component';
import { UserNewComponent } from './component/user/user-new/user-new.component';
import { UserEditComponent } from './component/user/user-edit/user-edit.component';

export const routes: Route[] = [
    {path: '',component: UserComponent},
    {path:'new',component:UserNewComponent},
    {path:'edit/:id',component:UserEditComponent}       
];