import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {
  debounce,
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  Subject,
  Subscription,
} from 'rxjs';

@Component({
  selector: 'app-insert-filter',
  templateUrl: './insert-filter.component.html',
  styleUrls: ['./insert-filter.component.scss'],
})
export class InsertFilterComponent implements OnInit, OnDestroy {
  search: FormControl = new FormControl('', Validators.minLength(5));

  hide: boolean = false;

  @Input() label: string = '';

  @Output() clickInsert: EventEmitter<void> = new EventEmitter();

  @Output() clickRefresh: EventEmitter<void> = new EventEmitter();

  @Output() searchEmitter: EventEmitter<string> = new EventEmitter();

  searchSub: Subject<string> = new Subject();

  search$: Subscription = new Subscription();

  ngOnInit(): void {
    this.setSubject();
  }

  ngOnDestroy(): void {
    this.search$.unsubscribe();
  }

  setSubject(): void {
    this.search$ = this.searchSub
      .pipe(
        distinctUntilChanged(),
        filter((value: string) => value.length >= 5 || value.length == 0),
        map((value: string) => value.trim()),
        debounceTime(500)
      )
      .subscribe((value: string) => {
        this.searchEmitter.emit(value);
      });
  }

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
