import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { MaterialModule } from '@beekin-app/material'

@NgModule({
  imports: [CommonModule, MaterialModule],
  declarations: [MenuComponent],
})
export class ShellUiMenuModule {}
