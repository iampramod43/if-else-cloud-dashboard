import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ButtonComponent } from './button/button.component';
import { VendorBreakdownComponent } from './vendor-breakdown/vendor-breakdown.component';
import { VendorMonitorComponent } from './vendor-monitor/vendor-monitor.component';
import { NgxEchartsModule } from 'ngx-echarts';
import * as echarts from 'echarts';
import { TableComponent } from './table/table.component'
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ChipComponent } from './chip/chip.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { DialogComponent } from './dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSortModule } from '@angular/material/sort';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    DashboardComponent,
    ButtonComponent,
    VendorBreakdownComponent,
    VendorMonitorComponent,
    TableComponent,
    ChipComponent,
    ProgressBarComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxEchartsModule.forRoot({
      echarts,
    }),
    HttpClientModule,
    MatTableModule,
    MatCheckboxModule,
    MatDialogModule,
    MatSortModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

