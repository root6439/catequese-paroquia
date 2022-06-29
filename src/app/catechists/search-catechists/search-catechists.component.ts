import { CatechistsService } from './../catechists.service';
import { Catechist } from './../../shared/models/catechist';
import { Router } from '@angular/router';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-search-catechists',
  templateUrl: './search-catechists.component.html',
  styleUrls: ['./search-catechists.component.scss'],
})
export class SearchCatechistsComponent implements OnInit {
  displayedColumns: string[] = ['name', 'phone', 'email', 'cpf', 'codeClass'];
  dataSource: MatTableDataSource<Catechist>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    public router: Router,
    private catechistService: CatechistsService
  ) {}

  ngOnInit(): void {}
}
