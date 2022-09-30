import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeDirective } from './directives/theme.directive';
import { BackHistoryDirective } from './directives/back-history.directive';
import { NumberOnlyDirective } from './directives/number-only.directive';

@NgModule({
    imports: [CommonModule],
    declarations: [
      ThemeDirective,
      BackHistoryDirective,
      NumberOnlyDirective
    ],
    exports : [ThemeDirective, BackHistoryDirective, NumberOnlyDirective]
  })
  export class ShareDirectivesModule {}
