import { Injectable } from '@angular/core';

export interface tableDataInterface {
  id: string;
  apiName: string;
  testCase: string;
  result: boolean;
  message: string;
  profile: boolean;
  profileStrategy: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  tableData = new Map<string, tableDataInterface>();

  constructor() { }

  getData(): Map<string, tableDataInterface> {
    return this.tableData;
  }

  addData(data: tableDataInterface): void {
    this.tableData.set(data.id, data);
  }

  deleteData(id: string): void {
    this.tableData.delete(id)
  }

  editData(data: tableDataInterface): void {
    this.tableData.set(data.id, data);
  }
}
