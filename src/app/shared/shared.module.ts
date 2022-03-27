import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsertFilterComponent } from './insert-filter/insert-filter.component';

@NgModule({
  declarations: [InsertFilterComponent],
  imports: [CommonModule, MatIconModule, MatButtonModule],
  exports: [InsertFilterComponent],
})
export class SharedModule {}
