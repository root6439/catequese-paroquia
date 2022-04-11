import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Class } from 'src/app/shared/models/class';

@Component({
  selector: 'app-search-class',
  templateUrl: './search-class.component.html',
  styleUrls: ['./search-class.component.scss'],
})
export class SearchClassComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'catechizing',
    'beginDate',
    'endDate',
    'code',
  ];
  dataSource: MatTableDataSource<Class> = new MatTableDataSource([
    {
      id: 1,
      catechists: [
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
          birth: new Date(),
          rg: '6863159',
        },
      ],
      code: 'IVC-02/2022',
      startDate: new Date(),
      endDate: new Date(),
    },
    {
      id: 1,
      catechists: [
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
      ],
      code: 'IVC-02/2022',
      startDate: new Date(),
      endDate: new Date(),
    },
    {
      id: 1,
      catechists: [
        {
          id: 1,
          name: 'Nicolas Soares Henrique',
          email: 'nicolas.soaresh.98@@gmail.com',
          phone: '48984689248',
          codeClass: '2022/01',
          address: null,
          cpf: '10553687956',
          birth: new Date(),
          rg: '6863159',
        },
        {
          id: 2,
          name: 'Caroline Kroeger',
          email: 'caroline.kroeger@gmail.com',
          phone: '48984689248',
          codeClass: '2022/01',
          address: null,
          cpf: '10553687956',
          birth: new Date(),
          rg: '6863159',
        },
      ],
      code: 'IVC-02/2022',
      startDate: new Date(),
      endDate: new Date(),
    },
    {
      id: 1,
      catechists: [
        {
          id: 1,
          name: 'Nicolas Soares Henrique',
          email: 'nicolas.soaresh.98@@gmail.com',
          phone: '48984689248',
          codeClass: '2022/01',
          address: null,
          birth: new Date(),
          cpf: '10553687956',
          rg: '6863159',
        },
        {
          id: 2,
          name: 'Caroline Kroeger',
          email: 'caroline.kroeger@gmail.com',
          phone: '48984689248',
          codeClass: '2022/01',
          address: null,
          birth: new Date(),
          cpf: '10553687956',
          rg: '6863159',
        },
      ],
      code: 'IVC-02/2022',
      startDate: new Date(),
      endDate: new Date(),
    },
    {
      id: 1,
      catechists: [
        {
          id: 1,
          name: 'Nicolas Soares Henrique',
          email: 'nicolas.soaresh.98@@gmail.com',
          phone: '48984689248',
          codeClass: '2022/01',
          address: null,
          cpf: '10553687956',
          birth: new Date(),
          rg: '6863159',
        },
        {
          id: 2,
          name: 'Caroline Kroeger',
          email: 'caroline.kroeger@gmail.com',
          phone: '48984689248',
          codeClass: '2022/01',
          address: null,
          birth: new Date(),
          cpf: '10553687956',
          rg: '6863159',
        },
      ],
      code: 'IVC-02/2022',
      startDate: new Date(),
      endDate: new Date(),
    },
    {
      id: 1,
      catechists: [
        {
          id: 1,
          name: 'Nicolas Soares Henrique',
          email: 'nicolas.soaresh.98@@gmail.com',
          phone: '48984689248',
          codeClass: '2022/01',
          address: null,
          birth: new Date(),
          cpf: '10553687956',
          rg: '6863159',
        },
        {
          id: 2,
          name: 'Caroline Kroeger',
          email: 'caroline.kroeger@gmail.com',
          phone: '48984689248',
          birth: new Date(),
          codeClass: '2022/01',
          address: null,
          cpf: '10553687956',
          rg: '6863159',
        },
      ],
      code: 'IVC-02/2022',
      startDate: new Date(),
      endDate: new Date(),
    },
    {
      id: 1,
      catechists: [
        {
          id: 1,
          name: 'Nicolas Soares Henrique',
          email: 'nicolas.soaresh.98@@gmail.com',
          phone: '48984689248',
          codeClass: '2022/01',
          address: null,
          cpf: '10553687956',
          birth: new Date(),
          rg: '6863159',
        },
        {
          id: 2,
          name: 'Caroline Kroeger',
          email: 'caroline.kroeger@gmail.com',
          phone: '48984689248',
          codeClass: '2022/01',
          address: null,
          birth: new Date(),
          cpf: '10553687956',
          rg: '6863159',
        },
      ],
      code: 'IVC-02/2022',
      startDate: new Date(),
      endDate: new Date(),
    },
    {
      id: 1,
      catechists: [
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
      ],
      code: 'IVC-02/2022',
      startDate: new Date(),
      endDate: new Date(),
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
