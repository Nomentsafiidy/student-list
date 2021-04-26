import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';
import { MatDialog } from '@angular/material/dialog';
import { StudentDetailsComponent } from 'src/app/components/student-details/student-details.component';
import { ExcelService } from 'src/app/services/excel.service';
@Component({
    selector: 'app-student',
    templateUrl: './student.page.html',
    styleUrls: ['./student.page.scss'],
})
export class StudentPage implements OnInit {
    public students: Student[];
    constructor(private studentService: StudentService, public dialog: MatDialog, private excelService: ExcelService) {
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
            data: this.getStudentDetails(this.students, email),
        });

        dialogRef.afterClosed().subscribe((result) => {
            console.log('The dialog was closed');
        });
    }

    getStudentDetails(students: Student[], email: string): Student {
        let tmp: Student = {
            title: '',
            last_name: '',
            first_name: '',
            promotion: '',
            gender: '',
            birth: '',
            email: '',
            street_name: '',
            city: '',
            country: '',
            company: '',
            prefered_color: '',
            street_address: '',
            planned_career: '',
            university: '',
            linkedin: '',
        };
        for (let i in students) {
            if (students[i].email === email) {
                tmp = students[i];
            }
        }
        return tmp;
    }

    exportExcel() {
        this.excelService.exportExcel(this.students);
    }
}
