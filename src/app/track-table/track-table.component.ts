import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { TrackTableDisplay } from '../track-table-display';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-track-table',
  templateUrl: './track-table.component.html',
  styleUrls: ['./track-table.component.css']
})
export class TrackTableComponent implements OnInit, AfterViewInit {
  @Input() parentData: TrackTableDisplay[];
  columnsToDisplay: string[] = ['laptime','car','votes'];
  dataSource: MatTableDataSource<TrackTableDisplay>;
  @ViewChild(MatSort) sort: MatSort;
  constructor() {
   }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;

  }

  ngOnInit(): void{
    
    this.dataSource = new MatTableDataSource(this.parentData);
  }

}
