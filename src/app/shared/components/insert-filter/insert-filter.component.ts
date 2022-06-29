import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-insert-filter',
  templateUrl: './insert-filter.component.html',
  styleUrls: ['./insert-filter.component.scss'],
})
export class InsertFilterComponent {
  search: FormControl = new FormControl('');

  hide: boolean = false;

  @Input() label: string = '';

  @Output() clickInsert: EventEmitter<void> = new EventEmitter();

  @Output() clickRefresh: EventEmitter<void> = new EventEmitter();

  onClickInsert(): void {
    this.clickInsert.emit();
  }

  onClickRefresh(): void {
    this.clickRefresh.emit();
  }

  resetSearch(): void {
    this.search.reset();
  }
}
