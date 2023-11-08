import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})



export class ButtonComponent implements OnInit {
  @Input() iconSrc: any = '';
  @Input() label: any = '';
  @Input() direction: any = '';
  constructor() { }
  
  ngOnInit() {
  }
 
}
