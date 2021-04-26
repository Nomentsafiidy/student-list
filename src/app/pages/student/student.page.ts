import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';
@Component({
    selector: 'app-student',
    templateUrl: './student.page.html',
    styleUrls: ['./student.page.scss'],
})
export class StudentPage implements OnInit {
    public students: Student[];
    constructor(private studentService: StudentService) {
        this.students = [];
    }

    ngOnInit(): void {
        this.studentService.getStudents().then((studentsList: Student[]) => {
            this.students = studentsList;
        });
    }
}
