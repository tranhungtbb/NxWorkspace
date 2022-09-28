import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSelectConfig, NgSelectModule } from '@ng-select/ng-select';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from '@agm/core';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PortalModule } from '@angular/cdk/portal';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CdkTreeModule } from '@angular/cdk/tree';
import { WebLayoutModule } from '@beekin-app/shell/ui/layout';
import { ShareDirectivesModule } from '@beekin-app/share/directives';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  imports: [
    CommonModule, 
    NgSelectModule,
    NgbDropdownModule,
    NgbDatepickerModule,
    ClipboardModule,
    DragDropModule,
    CdkStepperModule,
    ScrollingModule,
    CdkTreeModule,
    PortalModule,
    WebLayoutModule,
    ShareDirectivesModule,
    NgxDatatableModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBriVbWgmHEE8CGaEJM6V47Bem3VoYCi0Q',
      libraries: ['places'],
    })
  ],
  exports : [
    CommonModule, 
    NgSelectModule,
    NgbDropdownModule,
    NgbDatepickerModule,
    ClipboardModule,
    DragDropModule,
    CdkStepperModule,
    ScrollingModule,
    CdkTreeModule,
    PortalModule,
    WebLayoutModule,
    ShareDirectivesModule,
    NgxDatatableModule,
    AgmCoreModule
  ],
  providers : []
})
export class ShareAppCommonModule {}
