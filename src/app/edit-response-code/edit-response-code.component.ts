import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DataService, tableDataInterface } from '../data.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-response-code',
  templateUrl: './edit-response-code.component.html',
  styleUrls: ['./edit-response-code.component.css']
})
export class EditResponseCodeComponent implements OnInit {

  False: boolean = false;
  True: boolean = true;

  apiName: string;
  testCase: string;
  result: boolean;
  message: string;
  profile: boolean;
  profileStrategy: string;

  responseCodeData: any;

  responseCodeId: any;

  constructor(private route: ActivatedRoute, private dataService: DataService, private router: Router) {
    this.apiName = '';
    this.testCase = '';
    this.result = this.True;
    this.message = '';
    this.profile = true;
    this.profileStrategy = 'static';
  }

  ngOnInit(): void {
    this.responseCodeId = this.route.snapshot.paramMap.get('id');

    this.responseCodeData = this.dataService.getElementById(this.responseCodeId);

    this.apiName = this.responseCodeData.apiName;
    this.testCase = this.responseCodeData.testCase;
    this.result = this.responseCodeData.result;
    this.message = this.responseCodeData.message;
    this.profile = this.responseCodeData.profile;
    this.profileStrategy = this.responseCodeData.profileStrategy;
  }

  save() {
    this.dataService.editData({
      id: this.responseCodeId,
      apiName: this.apiName,
      testCase: this.testCase,
      result: this.result,
      message: this.message,
      profile: this.profile,
      profileStrategy: this.profile === true ? this.profileStrategy : '',
    });
    this.router.navigate(['/']);
  }

  reset() {
    this.apiName = this.responseCodeData.apiName;
    this.testCase = this.responseCodeData.testCase;
    this.result = this.responseCodeData.result;
    this.message = this.responseCodeData.message;
    this.profile = this.responseCodeData.profile;
    this.profileStrategy = this.responseCodeData.profileStrategy;
  }

  discard() {
    this.router.navigate(['/']);
  }
}
