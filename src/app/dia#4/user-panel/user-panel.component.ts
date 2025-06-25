// user-panel.component.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css'],
  imports: [CommonModule,FormsModule ],
})
export class UserPanelComponent {
  user = {
    name: 'Alex Rodríguez',
    avatar: '/assets/avatar.jpg',
    joinDate: '2022-03-15'
  };

  stats = {
    posts: 42,
    followers: 128,
    following: 56
  };

  activity = [
    {
      description: 'Publicaste un nuevo artículo sobre accesibilidad web',
      date: '2023-10-10'
    },
    {
      description: 'Comentaste en el post "Angular Signals"',
      date: '2023-10-08'
    }
  ];

  preferences = {
    emailNotifications: true,
    darkMode: false
  };

  editProfile() {
    // Lógica para editar perfil
  }

  changePassword() {
    // Lógica para cambiar contraseña
  }

  logout() {
    // Lógica para cerrar sesión
  }
}