import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularTableComponent } from './popular-table.component';

describe('PopularTableComponent', () => {
  let component: PopularTableComponent;
  let fixture: ComponentFixture<PopularTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
