import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  email: string;
  tel: string;
  adress: string;
  constructor() { 
    this.email = "SunnyTravel@mail.com",
    this.tel ="+43 543 663 1235"
    this.adress ="Mariahilferstraße 153/23, 1060 WIEN"
  }

  ngOnInit(): void {
  }

}
