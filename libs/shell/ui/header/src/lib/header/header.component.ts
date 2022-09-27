import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Theme } from '@beekin-app/share/data-access/models'
import { ThemeService } from '@beekin-app/share/data-access/beekin-api'


@Component({
  selector: 'beekin-app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  
  themeActive: Theme | undefined

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private themeService: ThemeService) {
    this.matIconRegistry.addSvgIcon(
      "icon-bell",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../../../assets/media/icons/bell.svg")
    );
  }

  ngOnInit(): void {
    this.themeActive = this.themeService.getActiveTheme();
  }



  toggle() {
    if (this.themeActive?.name === 'light') {
      this.themeService.setTheme('dark');
    } else {
      this.themeService.setTheme('light');
    }
    this.themeActive = this.themeService.getActiveTheme();
  }
}
