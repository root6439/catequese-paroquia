import { HttpParams } from '@angular/common/http';
import { SortDirection } from '@angular/material/sort';

export class HttpParamsBuilder {
  public static buildParamsPage(
    page: number = 0,
    linesPerPage: number = 5,
    orderBy: string = '',
    direction: SortDirection = 'desc'
  ): HttpParams {
    let params: HttpParams = new HttpParams();
    params = params.append('page', page);
    params = params.append('linesPerPage', linesPerPage);
    params = params.append('orderBy', orderBy);
    params = params.append('direction', direction.toUpperCase());

    return params;
  }
}
