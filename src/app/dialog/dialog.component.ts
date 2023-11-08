import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  
  constructor(@Inject(MAT_DIALOG_DATA) private data:any, private dialog: MatDialogRef<DialogComponent>){}
  name: any = '';
  handle: any = '';
  ngOnInit() {
    this.name = this.data.name.first_name + ' ' + this.data.name.last_name;
    this.handle = this.data.name.handle;
  }
  closeDialog() {
    this.dialog.close('Dialog Closed');
  }

}
