import { Component } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable, ReplaySubject } from 'rxjs';
import { Router } from '@angular/router';

import { MatDialog } from '@angular/material/dialog';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  profile: string;
  profile_strategy: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', profile: "true", profile_strategy: "static/random" },
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', profile: "true", profile_strategy: "static/random" },
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', profile: "true", profile_strategy: "static/random" },
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', profile: "true", profile_strategy: "static/random" },
];


@Component({
  selector: 'response-code',
  templateUrl: './response-code.component.html',
  styleUrls: ['./response-code.component.css'],
})
export class ResponseCodeComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'profile', 'profile_strategy'];
  dataToDisplay = [...ELEMENT_DATA];

  dataSource = new ExampleDataSource(this.dataToDisplay);

  removeData() {
    this.dataToDisplay = this.dataToDisplay.slice(0, -1);
    this.dataSource.setData(this.dataToDisplay);
  }
}

class ExampleDataSource extends DataSource<PeriodicElement> {
  private _dataStream = new ReplaySubject<PeriodicElement[]>();

  constructor(initialData: PeriodicElement[]) {
    super();
    this.setData(initialData);
  }

  connect(): Observable<PeriodicElement[]> {
    return this._dataStream;
  }

  disconnect() { }

  setData(data: PeriodicElement[]) {
    this._dataStream.next(data);
  }
}
