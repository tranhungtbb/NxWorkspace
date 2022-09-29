import { Component, OnInit } from '@angular/core';
import { Page } from '@beekin-app/share/data-access/models'

@Component({
  selector: 'beekin-app-dash-board-feature',
  templateUrl: './dash-board-feature.component.html',
  styleUrls: ['./dash-board-feature.component.scss'],
})
export class DashBoardFeatureComponent implements OnInit {
  constructor() {}

  page: Page = new Page();
  rows = new Array<any>();

  markers: any = {}
  zoom: number = 15

  ngOnInit(): void {
    this.page.totalElements = 200
    this.setPage({ offset: 0 });
  }

  ngAfterViewInit(): void {
    this.setCurrentLocation()
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

  mapClicked($event : any) {
    this.markers = {}
    this.markers.lat = $event.coords.lat
    this.markers.lng = $event.coords.lng
  }
  dragEnd(event : any): void {
    this.markers = {}
    this.markers.lat = event.coords.lat
    this.markers.lng = event.coords.lng
  }

  setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.markers = { lat: position.coords.latitude, lng: position.coords.longitude }
      })
    }
  }
}
