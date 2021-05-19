import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {ReactiveFormsModule} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  options=['one','two','three']
  searchInput = new FormControl('');
  filteredOptions: Observable<string[]>;

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.filteredOptions = this.searchInput.valueChanges
    .pipe(
      startWith(''),
      map(value => this._filter(value))
    );

  
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
  onSubmit(){
    this.router.navigateByUrl('/track/'+this.searchInput.value);
  }
}
