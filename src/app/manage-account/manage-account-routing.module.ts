import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OpcoComponent } from './components/opco/opco.component';
import { ProjectComponent } from './components/project/project.component';
import { KeyIndicatorComponent } from './components/key-indicator/key-indicator.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'opcos',
        pathMatch: 'full'
    },
    {
        path: 'opcos',
        component: OpcoComponent
    },
    {
        path: 'projects',
        component: ProjectComponent
    },
    {
        path: "keyIndicators",
        component: KeyIndicatorComponent
    },
    {
        path: 'users',
        component: UserComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ManageAccountRoutingModule { }
