import { Catechist } from './catechist';
export interface Class {
  id: number;
  catechist: Catechist[];
  startDate: Date;
  endDate: Date;
}
