import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'student',
        loadChildren: () => import('src/app/pages/student/student.module').then((m) => m.StudentPageModule),
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'student',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
