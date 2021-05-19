import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-track-present',
  templateUrl: './track-present.component.html',
  styleUrls: ['./track-present.component.css']
})
export class TrackPresentComponent implements OnInit {
  @Input()track:string;
  circuit: string;
  location: string;
  realRecord: string;
  simRecord: string;
  circuitImage: string;
  constructor() { }

  ngOnInit(): void {
    console.log(this.track);
    this.circuit = "Imola";
    this.location = "Spain";
    this.realRecord = "1:00";
    this.simRecord = "0:59"
    this.circuitImage = "imola"
  }

}
