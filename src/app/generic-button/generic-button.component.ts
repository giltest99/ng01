import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-generic-button',
  templateUrl: './generic-button.component.html',
  styleUrls: ['./generic-button.component.css'],
})
export class GenericButtonComponent {
  @Input() buttonName!: string;
  @Input() bgColor!: string;
  @Input() textColor!: string;
  alertMessage() {
    alert(`Cliqué sur ${this.buttonName}`);
    console.log(
      `Message en console après avoir affiché le nom du bouton ${this.buttonName}`
    );
  }
}
