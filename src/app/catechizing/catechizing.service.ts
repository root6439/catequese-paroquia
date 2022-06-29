import { Catechizing } from './../shared/models/catechizing';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pageable } from '../shared/models/pageable';

@Injectable({
  providedIn: 'root',
})
export class CatechizingService {
  private url: string = `${environment.serverUrl}/catequizandos`;

  constructor(private http: HttpClient) {}

  search(
    search: string = '',
    page: number = 0,
    linesPerPage: number = 5
  ): Observable<Pageable<Catechizing>> {
    let params: HttpParams = new HttpParams();
    params = params.append('page', page);
    params = params.append('linesPerPage', linesPerPage);
    params = params.append('name', search);

    return this.http.get<Pageable<Catechizing>>(`${this.url}/page`, {
      params: params,
    });
  }
}
