import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CustomValidator } from 'src/app/shared/validators/CustomValidator';
import { DateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-insert-catechists',
  templateUrl: './insert-catechists.component.html',
  styleUrls: ['./insert-catechists.component.scss'],
})
export class InsertCatechistsComponent implements OnInit {
  form: FormGroup = new FormGroup({});

  constructor(private dateAdapter: DateAdapter<Date>, private fb: FormBuilder) {
    this.dateAdapter.setLocale('br');
  }

  ngOnInit(): void {
    this.createForm();
  }

  onSubmit(): void { }

  createForm(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      phone: [
        '',
        [
          Validators.required,
          CustomValidator.requiredLength(11),
          Validators.pattern(/\d/),
        ],
      ],
      birth: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)dd$'
          ),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      rg: [
        '',
        [
          Validators.required,
          CustomValidator.requiredLength(7),
          Validators.pattern(/\d/),
        ],
      ],
      cpf: [
        '',
        [
          Validators.required,
          CustomValidator.requiredLength(11),
          Validators.pattern(/\d/),
        ],
      ],
    });
  }
}
