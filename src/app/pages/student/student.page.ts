import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from 'src/app/models/student';
@Component({
    selector: 'app-student',
    templateUrl: './student.page.html',
    styleUrls: ['./student.page.scss'],
})
export class StudentPage implements OnInit {
    private _jsonURL = 'assets/static_data/students.json';
    public students: Student[];
    constructor(private http: HttpClient) {
        this.students = [];
    }

    ngOnInit(): void {
        this.getStudents().then((studentsList: Student[]) => {
            this.students = studentsList;
        });
    }

    public getStudents(): Promise<Student[]> {
        return new Promise((resolve) => {
            this.http.get(this._jsonURL).subscribe(
                (data) => {
                    if (data) {
                        resolve(data as Student[]);
                    }
                },
                (error) => {
                    console.log(error);
                }
            );
        });
    }
}
