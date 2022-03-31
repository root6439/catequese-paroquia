import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-insert-filter',
  templateUrl: './insert-filter.component.html',
  styleUrls: ['./insert-filter.component.scss'],
})
export class InsertFilterComponent implements OnInit {
  hide: boolean = false;

  @Output() clickInsert: EventEmitter<void> = new EventEmitter();

  @Output() clickFilter: EventEmitter<void> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClickInsert(): void {
    this.clickInsert.emit();
  }

  onClickFilter(): void {
    this.clickFilter.emit();
  }
}
