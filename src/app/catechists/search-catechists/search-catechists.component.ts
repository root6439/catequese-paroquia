import { CatechistsService } from './../catechists.service';
import { Catechist } from './../../shared/models/catechist';
import { Router } from '@angular/router';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-search-catechists',
  templateUrl: './search-catechists.component.html',
  styleUrls: ['./search-catechists.component.scss'],
})
export class SearchCatechistsComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'phone', 'email', 'codeClass'];
  dataSource: MatTableDataSource<Catechist> = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    public router: Router,
    private catechistService: CatechistsService
  ) {}

  ngOnInit(): void {
    let aux = this.catechistService.getCatechistList();
    let catechists: Catechist[] = [];
    aux.snapshotChanges().subscribe((x) => {
      x.forEach((item) => {
        catechists.push(item.payload.toJSON() as Catechist);
      });
      console.log(catechists);
      
      this.dataSource = new MatTableDataSource(catechists);
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
