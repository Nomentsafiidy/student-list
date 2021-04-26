import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentPage } from './student.page';
//material import
import { MatButtonModule } from '@angular/material/button';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatDialogModule } from '@angular/material/dialog';
const routes: Routes = [
    {
        path: '',
        component: StudentPage,
    },
];

@NgModule({
    imports: [CommonModule, MatDialogModule, MatButtonModule, ScrollingModule, RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations: [StudentPage],
})
export class StudentPageModule {}
