import { Direction } from './../../shared/models/DirectionEnum';
import { AlertService } from './../../shared/components/alert/alert.service';
import { Pageable } from './../../shared/models/pageable';
import { CatechizingService } from './../catechizing.service';
import { Catechizing } from './../../shared/models/catechizing';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort, SortDirection } from '@angular/material/sort';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';

@Component({
  selector: 'app-search-catechizing',
  templateUrl: './search-catechizing.component.html',
  styleUrls: ['./search-catechizing.component.scss'],
})
export class SearchCatechizingComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = [
    'name',
    'birthDate',
    'class',
    'parent',
    'actions',
  ];
  dataSource: MatTableDataSource<Catechizing> = new MatTableDataSource();

  cat$: Subscription = new Subscription();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  dataLength: number = 0;

  constructor(
    public router: Router,
    private service: CatechizingService,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getData();
  }

  getData(
    search: string = '',
    page: number = 0,
    linesPerPage: number = 5,
    orderBy: string = 'name',
    direction?: SortDirection
  ): void {
    this.cat$ = this.service
      .getCatechizings(search, page, linesPerPage, orderBy, direction)
      .subscribe((resp: Pageable<Catechizing>) => {
        console.log(resp);

        this.dataSource = new MatTableDataSource(resp.content);

        this.dataLength = resp.totalElements;
      });
  }
}
