import { Catechist } from './../../shared/models/catechist';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { dateInputsHaveChanged } from '@angular/material/datepicker/datepicker-input-base';

@Component({
  selector: 'app-insert-class',
  templateUrl: './insert-class.component.html',
  styleUrls: ['./insert-class.component.scss'],
})
export class InsertClassComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  searchCatechist: FormControl = new FormControl('');
  catechists: Catechist[] = [
    {
      id: 1,
      name: 'Nicolas Soares Henrique',
      email: 'nicolas.soaresh.98@@gmail.com',
      phone: '48984689248',
      codeClass: '2022/01',
      address: null,
      cpf: '10553687956',
      rg: '6863159',
      birth: new Date('1998-08-07T03:24:00'),
    },
    {
      id: 2,
      name: 'Caroline Kroeger',
      email: 'caroline.kroeger@gmail.com',
      phone: '48984689248',
      codeClass: '2022/01',
      address: null,
      cpf: '10553687956',
      rg: '6863159',
      birth: new Date('1996-08-09T03:24:00'),
    },
  ];

  selectedCatechists: Catechist[] = [];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.form = this.fb.group({
      code: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      catechist1: this.fb.group({
        name: [''],
        birth: [''],
      }),
    });
  }

  onSubmit() {}

  getCatechistAge(birth: Date): string {
    let actualDate: Date = new Date();
    let age: number = actualDate.getFullYear() - birth.getFullYear();
    return `${age} anos`;
  }

  addCatechist(cat: Catechist): void {
    if (!this.selectedCatechists.includes(cat)) {
      this.selectedCatechists.push(cat);
    } else {
      //alerta catequista já selecionado
    }
  }
}
