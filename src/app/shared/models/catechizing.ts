import { Class } from './class';
import { Parent } from './parent';

export interface Catechizing {
  id: number;
  name: string;
  birthDay: Date;
  parentName: string;
  parentPhone: string;
  classCatechizing: Class;
}
