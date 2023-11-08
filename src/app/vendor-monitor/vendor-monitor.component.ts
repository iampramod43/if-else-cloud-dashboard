import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';
@Component({
  selector: 'app-vendor-monitor',
  templateUrl: './vendor-monitor.component.html',
  styleUrls: ['./vendor-monitor.component.scss']
})
export class VendorMonitorComponent implements OnInit {

  chartOptions: any = {};

  constructor() { }

  ngOnInit() {
    this.chartOptions = {
      series: [
        {
          type: 'gauge',
          startAngle: 180,
          endAngle: 0,
          min: 0,
          max: 300,
          splitNumber: 12,
          itemStyle: {
            color: '#7957D2'
          },
          progress: {
            show: true,
            roundCap: true,
            width: 18
          },
          pointer: {
            show: false
          },
          axisLine: {
            roundCap: true,
            lineStyle: {
              width: 18
            },
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: false
          },
          axisLabel: {
            show: false
          },
          title: {
            show: false
          },
          detail: {
            lineHeight: 0,
            height: 0,
            // borderRadius: 8,
            offsetCenter: [0, -10],
            valueAnimation: true,
            rich: {
              value: {
                fontSize: 50,
                fontWeight: 'bolder',
                color: '#777'
              },
            }
          },
          data: [
            {
              value: 240
            }
          ]
        }
      ]
    };
  }

}
