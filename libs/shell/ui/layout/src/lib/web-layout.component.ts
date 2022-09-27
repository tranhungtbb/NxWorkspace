import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'beekin-app-web-layout',
  templateUrl: './web-layout.component.html',
  styleUrls: ['./web-layout.component.scss'],
})
export class WebLayoutComponent implements OnInit {
  isExpanded: boolean = true
  constructor() {
  }

  ngOnInit(): void {

  }

  expanded(event : any) {
    this.isExpanded = event.isExpanded
  }
}
