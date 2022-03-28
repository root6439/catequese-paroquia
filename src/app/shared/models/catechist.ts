import { Address } from './address';

export interface Catechist {
  id: number;
  name: string;
  phone: string;
  email: string;
  address: Address;
}
