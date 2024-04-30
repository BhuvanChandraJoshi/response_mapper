import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DataService, tableDataInterface } from '../data.service';


@Component({
  selector: 'app-edit-response-code',
  templateUrl: './edit-response-code.component.html',
  styleUrls: ['./edit-response-code.component.css']
})
export class EditResponseCodeComponent implements OnInit {
  show_profile_strategy: boolean = true;

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

  constructor(private route: ActivatedRoute, private dataService: DataService) {
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
      profileStrategy: this.profileStrategy
    });
  }

  discard() {
    this.apiName = this.responseCodeData.apiName;
    this.testCase = this.responseCodeData.testCase;
    this.result = this.responseCodeData.result;
    this.message = this.responseCodeData.message;
    this.profile = this.responseCodeData.profile;
    this.profileStrategy = this.responseCodeData.profileStrategy;
  }
}
