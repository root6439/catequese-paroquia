import { Catechizing } from './../../shared/models/catechizing';
import { CatechizingService } from './../catechizing.service';
import { Class } from './../../shared/models/class';
import { Pageable } from './../../shared/models/pageable';
import { ClassService } from './../../class/class.service';
import {
  Subscription,
  Subject,
  debounceTime,
  distinctUntilChanged,
} from 'rxjs';
import { CatechistsService } from './../../catechists/catechists.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-insert-catechizing',
  templateUrl: './insert-catechizing.component.html',
  styleUrls: ['./insert-catechizing.component.scss'],
})
export class InsertCatechizingComponent implements OnInit {
  form: FormGroup = new FormGroup({});

  class$: Subscription = new Subscription();
  cat$: Subscription = new Subscription();

  classSub: Subject<string> = new Subject();
  classSub$: Subscription = new Subscription();

  avaibleClasses: Class[] = [];

  constructor(
    private fb: FormBuilder,
    private classService: ClassService,
    private catService: CatechizingService
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.setSubject();
  }

  createForm(): void {
    this.form = this.fb.group({
      catechizingName: ['', Validators.required],
      catechizingBirth: ['', [Validators.required]],
      parentName: ['', Validators.required],
      parentPhone: ['', [Validators.required]],
      code: ['', Validators.required],
      beginDate: [{ value: '', disabled: true }],
      endDate: [{ value: '', disabled: true }],
      classId: [''],
      catechist1: this.fb.group({
        name: [{ value: '', disabled: true }],
        phone: [{ value: '', disabled: true }],
      }),
      catechist2: this.fb.group({
        name: [{ value: '', disabled: true }],
        phone: [{ value: '', disabled: true }],
      }),
    });
  }

  setSubject(): void {
    this.class$ = this.classSub
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe((resp: string) => {
        this.getClass(resp);
      });
  }

  getClass(search: string = '', page: number = 0, offset: number = 5): void {
    this.class$ = this.classService
      .getClassCats(search, page, offset)
      .subscribe((resp: Pageable<Class>) => {
        this.avaibleClasses = resp.content;
      });
  }

  handleClass(classCat: Class): void {
    this.form.get('code').setValue(classCat.code);
    this.form.get('beginDate').setValue(classCat.startDate);
    this.form.get('endDate').setValue(classCat.endDate);
    this.form.get('classId').setValue(classCat.id);
    this.catechist1.get('name').setValue(classCat.catechists[0].name);
    this.catechist1.get('phone').setValue(classCat.catechists[0].phone);
    this.catechist2.get('name').setValue(classCat.catechists[1].name);
    this.catechist2.get('phone').setValue(classCat.catechists[1].phone);
  }

  get catechist1(): FormGroup {
    return this.form.get('catechist1') as FormGroup;
  }

  get catechist2(): FormGroup {
    return this.form.get('catechist2') as FormGroup;
  }

  save(): void {
    console.log(this.cat);

    this.cat$ = this.catService
      .postCatechizing(this.cat)
      .subscribe((resp: Catechizing) => {
        console.log('cadastrado');
      });
  }

  get cat(): Catechizing {
    return {
      birthDate: new Date(
        this.form.get('catechizingBirth').value
      ).getMilliseconds(),
      id: null,
      name: this.form.get('catechizingName').value,
      parentName: this.form.get('parentName').value,
      parentPhone: this.form.get('parentPhone').value,
      classCat: {
        catechists: [],
        code: null,
        endDate: null,
        id: this.form.get('classId').value,
        startDate: null,
      },
    };
  }
}
