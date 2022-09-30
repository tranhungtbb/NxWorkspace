import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'beekin-app-case-active-map',
  templateUrl: './case-active-map.component.html',
  styleUrls: ['./case-active-map.component.scss'],
})
export class CaseActiveMapComponent implements OnInit {
  constructor() {}

  @Input() mapHeight : string = '600px'

  markers: any = {}
  zoom: number = 15

  ngOnInit(): void {
    this.setCurrentLocation();
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
