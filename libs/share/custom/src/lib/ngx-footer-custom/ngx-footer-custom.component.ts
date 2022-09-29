import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';

@Component({
  selector: 'beekin-app-ngx-footer-custom',
  templateUrl: './ngx-footer-custom.component.html',
  styleUrls: ['./ngx-footer-custom.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxFooterCustomComponent implements OnInit {

  @Input() rowCount: number = 0;
  @Input() pageSize: number = 10;
  @Input() offset: number = 0;
  @Input() pagerLeftArrowIcon: string = 'datatable-icon-left';
  @Input() pagerRightArrowIcon: string = 'datatable-icon-right';
  @Input() pagerPreviousIcon: string = 'datatable-icon-prev';
  @Input() pagerNextIcon: string = 'datatable-icon-skip';

  @Output() page: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
