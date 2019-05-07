import { Component, OnInit } from '@angular/core';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-q1',
  templateUrl: './q1.component.html',
  styleUrls: ['./q1.component.css']
})
export class Q1Component implements OnInit {
  faThumbUp = faThumbsUp;
  faThumbDown = faThumbsDown;
  constructor() { }

  ngOnInit() {
  }

  answer() {
    let radioButton;
    radioButton = document.getElementById('carousel-3') as HTMLInputElement;
    radioButton.checked = true;
  }
}
