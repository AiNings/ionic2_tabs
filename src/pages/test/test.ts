import { Component } from '@angular/core';
import { TestService } from './TestService';
import { FileObj } from '../../model/FileObj';
import { NativeService } from '../../providers/NativeService';

@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {

  fileObjList: FileObj[] = [];

  constructor(public testService: TestService, public nativeService: NativeService) {
  }

  getFileData() {
    this.testService.getFileData().subscribe(res => {
      this.fileObjList = res;
    });
  }

}
