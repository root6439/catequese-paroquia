import { Catechist } from './catechist';
export interface Class {
  id: number;
  catechists: Catechist[];
  startDate: Date;
  endDate: Date;
  code: string;
}
