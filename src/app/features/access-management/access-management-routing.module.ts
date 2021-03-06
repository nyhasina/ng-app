import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRootComponent } from './containers/user-root/user-root.component';
import { RoleRootComponent } from './containers/role-root/role-root.component';

const routes: Routes = [
    {
        path: 'user',
        component: UserRootComponent
    },
    {
        path: 'role',
        component: RoleRootComponent
    },
    {
        path: '',
        redirectTo: 'user',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AccessManagementRoutingModule {
}
