import { Component } from '@angular/core';

import { DataService } from '../data.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new-response-code',
  templateUrl: './add-new-response-code.component.html',
  styleUrls: ['./add-new-response-code.component.css']
})
export class AddNewResponseCodeComponent {

  False: boolean = false;
  True: boolean = true;

  apiName: string;
  testCase: string;
  result: boolean;
  message: string;
  profile: boolean;
  profileStrategy: string;


  constructor(private dataService: DataService, private router: Router) {
    this.apiName = '';
    this.testCase = '';
    this.result = this.True;
    this.message = '';
    this.profile = true;
    this.profileStrategy = 'static';
  }

  add() {
    this.dataService.addData({
      id: this.dataService.getNewId(),
      apiName: this.apiName,
      testCase: this.testCase,
      result: this.result,
      message: this.message,
      profile: this.profile,
      profileStrategy: this.profileStrategy
    });
    console.log(this.dataService.getData());
    this.router.navigate(['/']);

  }

  reset() {
    this.apiName = '';
    this.testCase = '';
    this.result = this.True;
    this.message = '';
    this.profile = true;
    this.profileStrategy = 'static';
  }

  discard() {
    this.router.navigate(['/']);
  }
}