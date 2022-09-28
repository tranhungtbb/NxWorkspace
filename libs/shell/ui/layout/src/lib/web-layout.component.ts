import { animate, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'beekin-app-web-layout',
  templateUrl: './web-layout.component.html',
  styleUrls: ['./web-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('MenuExpansion', [
      state('false, void', style({ width: '100px' })),
      state('true', style({ width: '*' })),
      transition(
        'true <=> false, void => false, void => true',
        animate('1000ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ])
  ],
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
