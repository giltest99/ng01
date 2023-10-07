import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  users = [
    { id: 1, nom: 'Dupont', prenom: 'Jean' },
    { id: 2, nom: 'Martin', prenom: 'Pierre' },
    { id: 3, nom: 'Leroy', prenom: 'Julien' },
    { id: 4, nom: 'Moreau', prenom: 'Sophie' },
    { id: 5, nom: 'Albert', prenom: 'Gilles' },
  ];
}
