import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css'],
})
export class Page3Component implements OnInit {
  users$!: Observable<any>;
  constructor(private titleService: Title, private http: HttpClient) {}
  ngOnInit() {
    this.titleService.setTitle('Cartes');
    this.users$ = this.http.get('assets/users.json');
  }
}
