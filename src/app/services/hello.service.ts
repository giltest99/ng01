import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HelloService {
  constructor() {}
  sayHello() {
    alert('Hello mon nouveau super service !');
  }
}
