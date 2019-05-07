import { Component, OnInit } from '@angular/core';
import { faHandPointRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-q4',
  templateUrl: './q4.component.html',
  styleUrls: ['./q4.component.css']
})
export class Q4Component implements OnInit {
  faHandPointRight = faHandPointRight;

  constructor() { }

  ngOnInit() {
  }

}
