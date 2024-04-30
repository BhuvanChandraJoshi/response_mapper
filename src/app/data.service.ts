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
  tableData: Map<string, tableDataInterface>;

  constructor() {
    this.tableData = new Map<string, tableDataInterface>();
    this.tableData.set('1', { id: '1', apiName: 'ReqPay', testCase: '000', result: true, message: '', profile: true, profileStrategy: 'static' })
  }

  getNewId(): string {
    return (this.tableData.size).toString();
  }

  getElementById(id: string) {
    return this.tableData.get(id);
  }

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
