import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-root',

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './css-carousel.css']
})
export class AppComponent implements OnInit {
  totalUsers = 0;
  currentSize = 'initial';
  selectedRadio = '';

  ngOnInit() {
    const carouselElement = document.getElementById('carousel-1') as HTMLInputElement;
    carouselElement.checked = true;
    this.selectedRadio = 'carousel-1';
  }

}
