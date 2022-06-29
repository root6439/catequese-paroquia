export interface Pageable<T> {
  content: T[];
  pageable: {
    sort: {
      empty: false;
      sorted: true;
      unsorted: false;
    };
    offset: 0;
    pageNumber: 0;
    pageSize: 5;
    paged: true;
    unpaged: false;
  };
  last: true;
  totalElements: 3;
  totalPages: 1;
  size: 5;
  number: 0;
  sort: {
    empty: false;
    sorted: true;
    unsorted: false;
  };
  first: true;
  numberOfElements: 3;
  empty: false;
}
