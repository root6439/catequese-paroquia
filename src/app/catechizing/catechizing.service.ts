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
    orderBy: string = 'name',
    direction: SortDirection = 'desc'
  ): Observable<Pageable<Catechizing>> {
    let params: HttpParams = new HttpParams();
    params = params.append('page', page);
    params = params.append('linesPerPage', linesPerPage);
    params = params.append('name', search);
    params = params.append('orderBy', orderBy);
    params = params.append('direction', direction.toUpperCase());

    return this.http.get<Pageable<Catechizing>>(`${this.url}/page`, {
      params: params,
    });
  }
}
