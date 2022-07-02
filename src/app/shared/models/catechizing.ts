import { Class } from './class';
import { Parent } from './parent';

export interface Catechizing {
  id: number;
  name: string;
  birthDate: number;
  parentName: string;
  parentPhone: string;
  classCat: Class;
}
