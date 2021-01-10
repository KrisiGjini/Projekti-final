import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { AdminComponent } from './admin';
import { TeacherComponent } from './teacher';
import { KrijoKurseComponent } from './kurse/krijo-kurse';
import { LoginComponent } from './login';
import { AuthGuard } from './_helpers';
import { Role } from './_models';
import { StudentComponent } from './student';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuard],
        data: { roles: [Role.Admin] }
    },
    {
        path: 'teacher',
        component: TeacherComponent,
        canActivate: [AuthGuard],
        data: { roles: [Role.Teacher] }
    },
    {
        path: 'student',
        component: StudentComponent,
        canActivate: [AuthGuard],
        data: { roles: [Role.Student] }
    },
    {
        path: 'kurse/krijo-kurse',
        component: KrijoKurseComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'login',
        component: LoginComponent
    },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);