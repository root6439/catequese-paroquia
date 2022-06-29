import { Pageable } from './../../shared/models/pageable';
import { CatechizingService } from './../catechizing.service';
import { Catechizing } from './../../shared/models/catechizing';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';

@Component({
  selector: 'app-search-catechizing',
  templateUrl: './search-catechizing.component.html',
  styleUrls: ['./search-catechizing.component.scss'],
})
export class SearchCatechizingComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'birthDate', 'class', 'parent'];
  dataSource: MatTableDataSource<Catechizing> = new MatTableDataSource();

  cat$: Subscription = new Subscription();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  dataLength: number = 0;

  constructor(public router: Router, private service: CatechizingService) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getData();
  }

  getData(
    search: string = '',
    page: number = 0,
    linesPerPage: number = 5
  ): void {
    this.cat$ = this.service
      .search(search, page, linesPerPage)
      .subscribe((resp: Pageable<Catechizing>) => {
        console.log(resp);

        this.dataSource = new MatTableDataSource(resp.content);

        this.dataLength = resp.totalElements;
      });
  }
}
