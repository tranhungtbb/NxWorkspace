import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from '@beekin-app/material'

@NgModule({
  imports: [CommonModule, MaterialModule],
  declarations: [HeaderComponent],
})
export class ShellUiHeaderModule {}
