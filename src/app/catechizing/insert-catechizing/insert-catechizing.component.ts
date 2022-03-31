import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
      name: ['', Validators.required],
      birth: ['', Validators.required],
      parent: {
        name: ['', Validators.required],
        phones: {
          1: ['', Validators.required],
        },
      },
    });
  }
}
