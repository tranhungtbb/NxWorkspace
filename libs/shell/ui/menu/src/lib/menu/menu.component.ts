import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'beekin-app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  
  @Input() isExpanded: boolean | undefined
  @Output() onExpanded: EventEmitter<any> = new EventEmitter();
  panelOpenState: boolean = true

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer) {

    this.matIconRegistry.addSvgIcon(
      "icon-dashboard",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../../../assets/media/icons/dashboard-light.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "icon-cases",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../../../assets/media/icons/cases-dark.svg")
    );

    this.matIconRegistry.addSvgIcon(
      "icon-client",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../../../assets/media/icons/client-drak.svg")
    );

    this.matIconRegistry.addSvgIcon(
      "icon-staff",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../../../assets/media/icons/staff-dark.svg")
    );

    this.matIconRegistry.addSvgIcon(
      "icon-logout",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../../../assets/media/icons/logout-dark.svg")
    );

  }
  ngOnInit(): void {


  }

  onExpand() {
    this.isExpanded = !this.isExpanded
    this.onExpanded.emit({
      isExpanded: this.isExpanded
    })
  }

}
