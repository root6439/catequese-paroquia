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
export class SearchCatechistsComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'phone', 'email', 'codeClass'];
  dataSource: MatTableDataSource<Catechist> = new MatTableDataSource([
    {
      id: 1,
      name: 'Nicolas Soares Henrique',
      email: 'nicolas.soaresh.98@@gmail.com',
      phone: '48984689248',
      codeClass: '2022/01',
      address: null,
      cpf: '10553687956',
      rg: '6863159',
      birth: new Date(),
    },
    {
      id: 2,
      name: 'Caroline Kroeger',
      email: 'caroline.kroeger@gmail.com',
      phone: '48984689248',
      codeClass: '2022/01',
      address: null,
      cpf: '10553687956',
      rg: '6863159',
      birth: new Date(),
    },
  ]);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public router: Router) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
