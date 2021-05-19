import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-autocomplete-dropdown',
  templateUrl: './autocomplete-dropdown.component.html',
  styleUrls: ['./autocomplete-dropdown.component.css']
})
export class AutocompleteDropdownComponent implements OnInit {
  @Input() name: string;
  constructor() { }

  ngOnInit(): void {
  }

}
