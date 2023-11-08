import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpService } from '../http.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @ViewChild(MatSort, { static: true }) sort: MatSort | undefined;
  displayedColumns: any;
  dataSource: any = new MatTableDataSource();
  selection: any;
  pages: any[] = [1, 2, 3, '...', 8, 9, 10];
  activePage = 1;
  headers: any = [];
  constructor(private http: HttpService, private dialog: MatDialog) {}

  ngOnInit(){
    this.getTableData();
    
  }
  getTableData() {
    this.http.get('https://1.api.fy23ey04.careers.ifelsecloud.com/').subscribe(
      (data: any) => {
        const res = data;
        this.displayedColumns = ['select', ...res.grid_columns.map((c: any) => c.column_key)];
        this.headers = [{
          "column_key": "select",
          "column_name": "Select",
          "type": "select",
          "align": "left"
        }, ...res.grid_columns];
        this.headers.push({
          "column_key": "actions",
          "column_name": "",
          "type": "actions",
          "align": "left"
        })
        this.displayedColumns.push('actions');
        const tableData = res.grid_data.map((g: any) => {
          return {
            avatar: 'https://i.pravatar.cc/' + Math.floor(Math.random() * 150) + 1,
            ...g
          }
        });
        this.dataSource = new MatTableDataSource(tableData.slice(0, 10));
        this.dataSource.sort = this.sort
        this.selection = new SelectionModel(true, []);
      },
      (err: any) => {
        
      }
    );
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row: any) {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  deleteRow(id: any) {
    const index = this.dataSource.data.findIndex((item:any) => item.id === id);
    if (index !== -1) {
      this.dataSource.data.splice(index, 1);
      this.dataSource._updateChangeSubscription(); // Update the table
    }
  }
  editRow(element:any) {
   const dialogRef = this.dialog.open(DialogComponent, {
      data: element
   });
    dialogRef.afterClosed().subscribe((data: any) => {
      console.log(data);
    });
  }

}
