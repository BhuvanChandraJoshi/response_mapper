import { Component } from '@angular/core';
import { DataService, tableDataInterface } from '../data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  tableData: Map<string, tableDataInterface>;

  constructor(private dataService: DataService) {
    this.tableData = this.dataService.getData();
  }

  delete(id: string) {
    this.dataService.deleteData(id);
  }
}