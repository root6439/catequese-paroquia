import { Direction } from './../shared/models/DirectionEnum';
import { Catechizing } from './../shared/models/catechizing';
import { environment } from 'src/environments/environment';
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { Pageable } from '../shared/models/pageable';
import { SortDirection } from '@angular/material/sort';
import { HttpParamsBuilder } from '../shared/utils/HttpParamsBuilder';

@Injectable({
  providedIn: 'root',
})
export class CatechizingService {
  private url: string = `${environment.serverUrl}/catequizandos`;

  constructor(private http: HttpClient) {}

  getCatechizings(
    search: string = '',
    page: number = 0,
    linesPerPage: number = 5,
    orderBy: string = '',
    direction: SortDirection = 'desc'
  ): Observable<Pageable<Catechizing>> {
    let params: HttpParams = new HttpParams();
    params = HttpParamsBuilder.buildParamsPage(
      page,
      linesPerPage,
      orderBy,
      direction
    );
    params = params.append('name', search);

    return this.http.get<Pageable<Catechizing>>(`${this.url}/page`, {
      params: params,
    });
  }

  postCatechizing(cat: Catechizing): Observable<Catechizing> {
    return this.http.post<Catechizing>(`${this.url}`, cat);
  }
}
