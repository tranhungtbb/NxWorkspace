import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ACTIVE_THEME, ThemeOptions, THEMES } from '@beekin-app/share/data-access/models'
import {ThemeService } from '@beekin-app/share/data-access/beekin-api'
import { ThemeDirective } from '@beekin-app/share/directives'


@NgModule({
  imports: [CommonModule],
    providers: [ThemeService],
    declarations: [ThemeDirective],
    exports: [ThemeDirective]
})

export class ShareThemeModule {
  static forRoot(options: ThemeOptions): ModuleWithProviders<ShareThemeModule> {
      return {
          ngModule: ShareThemeModule,
          providers: [
              {
                  provide: THEMES,
                  useValue: options.themes
              },
              {
                  provide: ACTIVE_THEME,
                  useValue: options.active
              }
          ]
      };
  }
}
