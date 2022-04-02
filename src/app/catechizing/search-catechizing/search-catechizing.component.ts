import { Class } from './../../shared/models/class';
import { Catechizing } from './../../shared/models/catechizing';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-catechizing',
  templateUrl: './search-catechizing.component.html',
  styleUrls: ['./search-catechizing.component.scss'],
})
export class SearchCatechizingComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'birthDate', 'class', 'parent'];
  dataSource: MatTableDataSource<Catechizing> = new MatTableDataSource([
    { id: 1, name: 'João', dateBirth: new Date(), class: null, parent: null },
    { id: 1, name: 'Ana', dateBirth: new Date(), class: null, parent: null },
    {
      id: 1,
      name: 'Letícia',
      dateBirth: new Date(),
      class: null,
      parent: null,
    },
    {
      id: 1,
      name: 'Amábile',
      dateBirth: new Date(),
      class: null,
      parent: null,
    },
    {
      id: 1,
      name: 'Caroline',
      dateBirth: new Date(),
      class: null,
      parent: null,
    },
    {
      id: 1,
      name: 'Nicolas',
      dateBirth: new Date(),
      class: null,
      parent: null,
    },
    { id: 1, name: 'Emily', dateBirth: new Date(), class: null, parent: null },
    {
      id: 1,
      name: 'Emanuel',
      dateBirth: new Date(),
      class: null,
      parent: null,
    },
  ]);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort ;

  constructor(public router: Router) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
