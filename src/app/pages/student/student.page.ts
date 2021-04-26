import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StudentDetailsComponent } from 'src/app/components/student-details/student-details.component';
@Component({
    selector: 'app-student',
    templateUrl: './student.page.html',
    styleUrls: ['./student.page.scss'],
})
export class StudentPage implements OnInit {
    public students: Student[];
    constructor(private studentService: StudentService, public dialog: MatDialog) {
        this.students = [];
    }

    ngOnInit(): void {
        this.studentService.getStudents().then((studentsList: Student[]) => {
            this.students = studentsList;
        });
    }

    showStudentDetails(email: string) {
        const dialogRef = this.dialog.open(StudentDetailsComponent, {
            width: '250px',
        });

        dialogRef.afterClosed().subscribe((result) => {
            console.log('The dialog was closed');
        });
    }
}
