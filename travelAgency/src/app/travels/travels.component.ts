import { Component, OnInit } from '@angular/core';
import { products } from '../products';


@Component({
  selector: 'travels',
  templateUrl: './travels.component.html',
  styleUrls: ['./travels.component.scss']
})
export class TravelsComponent implements OnInit {
products = products;
  constructor() { }


  ngOnInit(): void {
  }

}
