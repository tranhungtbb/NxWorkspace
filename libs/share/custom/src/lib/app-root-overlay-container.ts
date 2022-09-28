import { DOCUMENT } from "@angular/common";
import { Inject, Injectable, InjectionToken, OnDestroy } from "@angular/core";
import { OverlayContainer } from '@angular/cdk/overlay';
import { Platform } from '@angular/cdk/platform';

export const OVERLAY_PARENT_HTML = new InjectionToken<string>('OVERLAY_PARENT_HTML');

@Injectable({ providedIn: 'root' })

export class AppRootOverlayContainer extends OverlayContainer implements OnDestroy {
    constructor(@Inject(DOCUMENT) _document: Document, _platform: Platform) {
        super(_document, _platform);
    }


    override ngOnDestroy() {
        super.ngOnDestroy();
    }

    getRootElement(): Element | null {
        return this._document.querySelector('mat-drawer-container');
    }

    protected override _createContainer(): void {
        super._createContainer();
        this._appendToRootComponent();
    }

    private _appendToRootComponent(): void {
        if (!this._containerElement) {
            return;
        }

        const rootElement = this.getRootElement();
        const parent = rootElement || this._document.body;
        parent.appendChild(this._containerElement);
    }
}