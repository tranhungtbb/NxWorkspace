import { Component, Input, OnInit } from '@angular/core';
import { Page } from '@beekin-app/share/data-access/models'

@Component({
  selector: 'beekin-app-case-list',
  templateUrl: './case-list.component.html',
  styleUrls: ['./case-list.component.scss'],
})
export class CaseListComponent implements OnInit {
 
  @Input() size : number | undefined
  constructor() {}

  page: Page = new Page();
  rows = new Array<any>();

  ngOnInit(): void {
    if(this.size){
      this.page.size = this.size
    }
    this.page.totalElements = 200
    this.setPage({ offset: 0 });
  }

  getRowClass(row : any) {
    switch (row.category) {
      case 1:
      return 'bg-row-sos'
    }
    return ''
  }
 
  setPage(pageInfo : any) {
    this.page.pageNumber = pageInfo.offset;
    // call service

    this.rows = [
      {
        "clients": "Ethel Price",
        "clientImage": "assets/media/avatars/avatar-4.png",
        "caseId": "#SOS-02",
        "category": 1,
        "operator": "Alex Ken",
        "operatorImage": "/src/assets/media/avatars/avatar-1.png",
        "lastUpdated": "Today 09:55"
      },
      {
        "clients": "Ethel Price",
        "clientImage": "assets/media/avatars/avatar-1.png",
        "caseId": "#SOS-02",
        "category": 1,
        "operator": "Alex Ken",
        "operatorImage": "/src/assets/media/avatars/avatar-1.png",
        "lastUpdated": "Today 09:55"
      },
      {
        "clients": "Ethel Price",
        "clientImage": "assets/media/avatars/Ellipse 2.png",
        "caseId": "#SOS-02",
        "category": 2,
        "operator": "Alex Ken",
        "operatorImage": "/src/assets/media/avatars/avatar-1.png",
        "lastUpdated": "Today 09:55"
      },
      {
        "clients": "Ethel Price",
        "clientImage": "assets/media/avatars/avatar-4.png",
        "caseId": "#SOS-02",
        "category": 2,
        "operator": "Alex Ken",
        "operatorImage": "/src/assets/media/avatars/avatar-1.png",
        "lastUpdated": "Today 09:55"
      },
      {
        "clients": "Ethel Price",
        "clientImage": "assets/media/avatars/avatar-1.png",
        "caseId": "#SOS-02",
        "category": 1,
        "operator": "Alex Ken",
        "operatorImage": "/src/assets/media/avatars/avatar-1.png",
        "lastUpdated": "Today 09:55"
      },
      {
        "clients": "Ethel Price",
        "clientImage": "assets/media/avatars/Ellipse 2.png",
        "caseId": "#SOS-02",
        "category": 3,
        "operator": "Alex Ken",
        "operatorImage": "/src/assets/media/avatars/avatar-1.png",
        "lastUpdated": "Today 09:55"
      },
      {
        "clients": "Ethel Price",
        "clientImage": "assets/media/avatars/avatar-1.png",
        "caseId": "#SOS-02",
        "category": 1,
        "operator": "Alex Ken",
        "operatorImage": "/src/assets/media/avatars/avatar-1.png",
        "lastUpdated": "Today 09:55"
      },
      {
        "clients": "Ethel Price",
        "clientImage": "assets/media/avatars/avatar-1.png",
        "caseId": "#SOS-02",
        "category": 3,
        "operator": "Alex Ken",
        "operatorImage": "/src/assets/media/avatars/avatar-1.png",
        "lastUpdated": "Today 09:55"
      },
      {
        "clients": "Ethel Price",
        "clientImage": "assets/media/avatars/avatar-1.png",
        "caseId": "#SOS-02",
        "category": 1,
        "operator": "Alex Ken",
        "operatorImage": "/src/assets/media/avatars/avatar-1.png",
        "lastUpdated": "Today 09:55"
      },
      {
        "clients": "Ethel Price",
        "clientImage": "assets/media/avatars/avatar-1.png",
        "caseId": "#SOS-02",
        "category": 1,
        "operator": "Alex Ken",
        "operatorImage": "/src/assets/media/avatars/avatar-1.png",
        "lastUpdated": "Today 09:55"
      },
    ]
  }

}
