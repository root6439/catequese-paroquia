import { Catechist } from './catechist';
export interface Class {
  id: number;
  code: string;
  startDate: number;
  endDate: number;
  catechists: Catechist[];
}
