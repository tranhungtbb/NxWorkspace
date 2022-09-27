import { Directive, ElementRef } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { Subject, takeUntil } from 'rxjs';
import { Theme } from '@beekin-app/share/data-access/models'
import { ThemeService } from '@beekin-app/share/data-access/beekin-api'

@Directive({
  selector: '[beekinAppTheme]'
})
export class ThemeDirective {

  private unsubscribe = new Subject();
    constructor(
        private _elementRef: ElementRef,
        private _themeService: ThemeService,
        private overlayContainer: OverlayContainer
    ) { }

    ngOnInit() {
        const active = this._themeService.getActiveTheme();
        if (active) {
            this.updateTheme(active);
        }
        this._themeService.themeChange
            .pipe(takeUntil(this.unsubscribe))
            .subscribe((theme: Theme) => this.updateTheme(theme));
    }

    updateTheme(theme: Theme) {

        for (const key in theme.properties) {
            this._elementRef.nativeElement.style.setProperty(key, theme.properties[key]);
            // this.overlayContainer.getContainerElement().style.setProperty(key, theme.properties[key]);
        }
    }

}
