import { Component, OnInit } from '@angular/core';
import { PopularTableDisplay } from '../popular-table-display';





@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  popTracks: PopularTableDisplay[] = [
    {name: "Paul Ricard", count: 10},
    {name: "Imola", count: 8},
    {name: "Spa", count: 5},
    {name: "Donnigton", count: 3},
  ];
  popCars: PopularTableDisplay[] = [
    {name: "Mazda MX5", count: 10},
    {name: "Merc GT3", count: 8},
    {name: "Lambo 911", count: 5},
    {name: "Ford Van", count: 3},
  ];
  popCombos: PopularTableDisplay[] = [
    {name: "Paul Ricard + MX5", count: 10},
    {name: "Paul Ricard + GT3", count: 8},
    {name: "Spa + Ford Van", count: 5},
    {name: "Spa + MX5", count: 3},
  ];

  track: string = "Imola"

  popTracksTableName: string = "Most Popular Tracks"
  popCarsTableName: string = "Most Popular Cars"
  popCombosTableName: string = "Most Popular Combos"

  constructor() { }

  ngOnInit(): void {
  }

}
 