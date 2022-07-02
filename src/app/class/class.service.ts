import { HttpParamsBuilder } from './../shared/utils/HttpParamsBuilder';
import { Class } from 'src/app/shared/models/class';
import { Pageable } from './../shared/models/pageable';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { SortDirection } from '@angular/material/sort';

@Injectable({
  providedIn: 'root',
})
export class ClassService {
  private provideUrl: string = `${environment.serverUrl}/turmas`;

  constructor(private http: HttpClient) {}

  getClassCats(
    search: string = '',
    page: number = 0,
    linesPerPage: number = 5,
    orderBy: string = '',
    direction: SortDirection = 'desc'
  ): Observable<Pageable<Class>> {
    let params: HttpParams = new HttpParams();
    params = HttpParamsBuilder.buildParamsPage(
      page,
      linesPerPage,
      orderBy,
      direction
    );

    params = params.append('code', search);

    return this.http.get<Pageable<Class>>(`${this.provideUrl}/page`, {
      params: params,
    });
  }
}
