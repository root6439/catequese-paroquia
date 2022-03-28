import { Class } from './class';
import { Parent } from './parent';

export interface Catechizing {
  id: number;
  name: string;
  dateBirth: Date;
  parent: Parent;
  class: Class;
}
