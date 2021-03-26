import { Component, OnInit } from '@angular/core';
import { travelOffers } from '../travel-offers'

@Component({
  selector: 'travels',
  templateUrl: './travels.component.html',
  styleUrls: ['./travels.component.scss']
})
export class TravelsComponent implements OnInit {
travelOffers = travelOffers;
  constructor() { }

  ngOnInit(): void {
  }

}
