import { Component, Input, OnInit } from '@angular/core';
import { PopularTableDisplay } from '../popular-table-display';

@Component({
  selector: 'app-popular-table',
  templateUrl: './popular-table.component.html',
  styleUrls: ['./popular-table.component.css']
})
export class PopularTableComponent implements OnInit {
  @Input() dataSource:PopularTableDisplay;
  @Input() title:string;
  columnsToDisplay:string[] = ['name','count']

  constructor() { 
    
  }

  ngOnInit(): void {

  }

}
