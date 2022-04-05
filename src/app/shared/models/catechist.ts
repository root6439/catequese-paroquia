import { Address } from './address';

export interface Catechist {
  id: number;
  name: string;
  phone: string;
  email: string;
  rg: string;
  cpf: string;
  address: Address;
  codeClass: string;
}
