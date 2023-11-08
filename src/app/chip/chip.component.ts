import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss']
})
export class ChipComponent implements OnInit {
  @Input() value: string = ''; // The value you want to display in the chip
  @Input() backgroundColor: string = ''; // The color you want to pass to style the chip
  @Input() textColor: string = ''; // The color you want to pass to style the chip
  @Input() showStatus: string = '';
  
  ngOnInit() {
  }

}
