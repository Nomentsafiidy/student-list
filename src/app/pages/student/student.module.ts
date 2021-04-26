import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentPage } from './student.page';
//material import
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [
    {
        path: '',
        component: StudentPage,
    },
];

@NgModule({
    imports: [CommonModule, MatButtonModule, RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations: [StudentPage],
})
export class StudentPageModule {}
