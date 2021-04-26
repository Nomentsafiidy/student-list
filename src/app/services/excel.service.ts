import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';
import { Student } from '../models/student';
@Injectable({
    providedIn: 'root',
})
export class ExcelService {
    fileName = 'students_list.xlsx';
    constructor() {}

    exportExcel(studentsList: Student[]) {
        this.generateTable(studentsList).then((table) => {
            const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(table);

            const wb: XLSX.WorkBook = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

            XLSX.writeFile(wb, this.fileName);
        });
    }

    private generateTable(studentsList: Student[]) {
        return new Promise((resolve) => {
            let table = document.createElement('table');
            const head = `<tr>
                              <th >title</th>
                              <th >last_name</th>
                              <th >first_name</th>
                              <th >email</th>
                              <th >promotion</th>
                          </tr>`;
            let tmpTr = '';
            for (let i = 0; i < studentsList.length; i++) {
                tmpTr += `<tr>
                          <td>${studentsList[i].title}</td>
                          <td>${studentsList[i].last_name}</td>
                          <td>${studentsList[i].first_name}</td>
                          <td>${studentsList[i].email}</td>
                          <td>${studentsList[i].promotion}</td>
                       </tr>`;
            }
            table.innerHTML = head + tmpTr;
            resolve(table);
        });
    }
}
