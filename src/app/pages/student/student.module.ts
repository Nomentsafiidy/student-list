import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentPage } from './student.page';

const routes: Routes = [
    {
        path: '',
        component: StudentPage,
    },
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations: [StudentPage],
})
export class StudentPageModule {}
