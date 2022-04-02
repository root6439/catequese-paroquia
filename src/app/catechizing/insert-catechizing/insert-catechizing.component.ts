import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-insert-catechizing',
  templateUrl: './insert-catechizing.component.html',
  styleUrls: ['./insert-catechizing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InsertCatechizingComponent implements OnInit {
  form: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.form = this.fb.group({
      catechizingName: ['', Validators.required],
      catechizingBirth: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)dd$'
          ),
        ],
      ],

      parentName: ['', Validators.required],
      parentBirth: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)dd$'
          ),
        ],
      ],
      rg: ['', Validators.required],
      cpf: ['', Validators.required],

      code: ['', Validators.required],
      beginDate: [{ value: '', disabled: true }],
      endDate: [{ value: '', disabled: true }],
      catequist1: this.fb.group({
        name: [{ value: '', disabled: true }],
        phone: [{ value: '', disabled: true }],
      }),
      catequist2: this.fb.group({
        name: [{ value: '', disabled: true }],
        phone: [{ value: '', disabled: true }],
      }),
    });
  }

  onSubmit(): void {}
}
