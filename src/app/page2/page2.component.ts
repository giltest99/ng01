import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css'],
})
export class Page2Component implements OnInit {
  constructor(private titleService: Title) {}
  ngOnInit() {
    this.titleService.setTitle('Page 2');
  }
  showAlert() {
    window.alert('Vous avez cliqué sur le bouton !');
  }
  imageUrl = '../../assets/github-logo.png';
}
