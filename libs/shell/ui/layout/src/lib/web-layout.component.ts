import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'beekin-app-web-layout',
  templateUrl: './web-layout.component.html',
  styleUrls: ['./web-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WebLayoutComponent implements OnInit {
  isExpanded: boolean = true
  constructor() {
  }

  ngOnInit(): void {

  }

  expanded(event: any) {
    this.isExpanded = event.isExpanded
  }
}
