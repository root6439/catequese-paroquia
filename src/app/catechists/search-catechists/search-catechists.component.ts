import { SpinnerService } from './../../shared/progress-spinner-table/spinner.service';
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
    private catechistService: CatechistsService,
    private spinnerService: SpinnerService
  ) {}

  ngOnInit(): void {
    this.spinnerService.show();
    let aux = this.catechistService.getCatechistList();
    let catechists: Catechist[] = [];
    aux.snapshotChanges().subscribe((x) => {
      x.forEach((item) => {
        catechists.push(item.payload.toJSON() as Catechist);
      });
      console.log(catechists);

      this.dataSource = new MatTableDataSource(catechists);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.spinnerService.hide();
    });
  }
}
