import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../models/student';

@Injectable({
    providedIn: 'root',
})
export class StudentService {
    private _jsonURL = 'assets/static_data/students.json';
    constructor(private http: HttpClient) {}

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
