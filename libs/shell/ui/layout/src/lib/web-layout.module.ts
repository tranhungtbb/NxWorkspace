import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebLayoutComponent } from './web-layout.component';
import { ShellUiHeaderModule } from '@beekin-app/shell/ui/header';
import { ShellUiMenuModule } from '@beekin-app/shell/ui/menu';

@NgModule({
  imports: [CommonModule,ShellUiHeaderModule, ShellUiMenuModule],
  declarations: [WebLayoutComponent],
})
export class WebLayoutModule {}
