import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxFooterCustomComponent } from './ngx-footer-custom/ngx-footer-custom.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, NgxDatatableModule, NgSelectModule, FormsModule],
  declarations: [NgxFooterCustomComponent],
  exports : [NgxFooterCustomComponent]
})
export class ShareCustomModule {}
