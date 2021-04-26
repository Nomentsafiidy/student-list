import { Component, OnInit, Inject } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Student } from 'src/app/models/student';
@Component({
    selector: 'app-student-details',
    templateUrl: './student-details.component.html',
    styleUrls: ['./student-details.component.scss'],
})
export class StudentDetailsComponent implements OnInit {
    ngOnInit(): void {}

    constructor(public dialogRef: MatDialogRef<StudentDetailsComponent>, @Inject(MAT_DIALOG_DATA) public data: Student) {}

    onNoClick(): void {
        this.dialogRef.close();
    }
}
