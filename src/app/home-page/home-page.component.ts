import { Component, OnInit } from '@angular/core';
import { Foods } from 'src/app/databases/food-db';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  dateToday: number = Date.now();
  foods = Foods;
   
  constructor() { }

  ngOnInit(): void {
  }

}
