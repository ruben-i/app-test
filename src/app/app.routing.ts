import { Route } from '@angular/router';
import { UserComponent } from './component/user/user/user.component';
import { UserNewComponent } from './component/user/user-new/user-new.component';

export const routes: Route[] = [
    {
        path: '',
        component: UserComponent
    },
    {
        path:'new',
        component:UserNewComponent

    }

    
    
];