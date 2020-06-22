import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  h1Style: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  // method referenced on th click event
  firstClick(){
    this.h1Style = true;
  }

}