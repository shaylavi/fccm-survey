import { Component, OnInit } from '@angular/core';
import { faHandPointRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {
  faHandPointRight = faHandPointRight;
  constructor() { }

  ngOnInit() {
  }

  begin() {
    let radioButton;
    radioButton = document.getElementById('carousel-2') as HTMLInputElement;
    radioButton.checked = true;
  }

}
