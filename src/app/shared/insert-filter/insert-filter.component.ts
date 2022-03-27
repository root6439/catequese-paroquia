import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insert-filter',
  templateUrl: './insert-filter.component.html',
  styleUrls: ['./insert-filter.component.scss']
})
export class InsertFilterComponent implements OnInit {

  hide: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
