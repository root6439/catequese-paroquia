import { Catechist } from './../shared/models/catechist';
import { Injectable } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root',
})
export class CatechistsService {
  catechistListRef: AngularFireList<Catechist[]>;
  catechistRef: AngularFireObject<Catechist>;

  constructor(private db: AngularFireDatabase) {}

  getCatechistList() {
    this.catechistListRef = this.db.list('/catechists');
    return this.catechistListRef;
  }
}
