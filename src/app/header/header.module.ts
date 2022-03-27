import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from './header.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [HeaderComponent],
  imports: [MatToolbarModule, MatIconModule, MatButtonModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
