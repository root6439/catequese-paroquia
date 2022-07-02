import { Catechist } from './../../shared/models/catechist';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insert-class',
  templateUrl: './insert-class.component.html',
  styleUrls: ['./insert-class.component.scss'],
})
export class InsertClassComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  searchCatechist: FormControl = new FormControl('');
  catechists: Set<Catechist> = new Set<Catechist>([]);

  selectedCatechists: Set<Catechist> = new Set<Catechist>();

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
}
