import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css'],
})
export class Page3Component implements OnInit {
  constructor(private titleService: Title) {}
  ngOnInit() {
    this.titleService.setTitle('Page 3');
  }
}
