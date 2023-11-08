import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';
@Component({
  selector: 'app-vendor-breakdown',
  templateUrl: './vendor-breakdown.component.html',
  styleUrls: ['./vendor-breakdown.component.scss']
})
export class VendorBreakdownComponent implements OnInit {

  chartOptions: any = {};

  constructor() {}

  ngOnInit(){
    this.chartOptions = {
      color: [
        "#6342BF",
        "#9879E6",
        "#E9ECF0"
      ],
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          axisTick: {
            alignWithLabel: true
          },
          name: "Month",
          // nameGap: 20,
          nameLocation: "middle",
          axisLabel: {
            interval: 0,
          }
        }
      ],
      yAxis: [
        {
          type: 'value',
          axisLabel: {
            show: true
          },
          name: "Security Rating",
          nameRotate: 90,
          nameLocation: "middle",
          nameGap: 40
        }
      ],
      series: [
        {
          showBackground: true,
          name: 'Direct',
          type: 'bar',
          emphasis: {
            focus: 'series'
          },
          roundCap: true,
          itemStyle: {
            borderRadius: [8, 8, 0, 0],
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#af93c0' },
              { offset: 0.5, color: '#9678C0' },
              { offset: 1, color: '#6342BF' }
            ])
          },
          data: [40, 52, 21, 64, 90, 60, 40, 70, 33, 80, 54, 44]
        },
      ]
    };
  }

}
