import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebLayoutComponent } from './web-layout.component';
import { ShellUiHeaderModule } from '@beekin-app/shell/ui/header';
import { ShellUiMenuModule } from '@beekin-app/shell/ui/menu';
import { MaterialModule } from '@beekin-app/material';
import { HeaderComponent } from '@beekin-app/shell/ui/header';

@NgModule({
  imports: [CommonModule, ShellUiMenuModule, ShellUiHeaderModule, MaterialModule],
  declarations: [WebLayoutComponent],
  exports: [WebLayoutComponent]
})
export class WebLayoutModule { }
