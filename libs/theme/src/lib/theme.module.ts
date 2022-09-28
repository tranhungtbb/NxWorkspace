import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ACTIVE_THEME, ThemeOptions, THEMES } from '@beekin-app/share/data-access/models'

@NgModule({
  imports: [CommonModule],
})
export class ThemeModule {
  static forRoot(options: ThemeOptions): ModuleWithProviders<ThemeModule> {
    return {
        ngModule: ThemeModule,
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
