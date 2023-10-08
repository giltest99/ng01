import { Component } from '@angular/core';
import { HelloService } from '../services/hello.service';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
})
export class HelloComponent {
  constructor(private helloService: HelloService) {}
  triggerSayHello() {
    this.helloService.sayHello();
  }
}
