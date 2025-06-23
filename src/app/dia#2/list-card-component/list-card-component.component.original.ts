import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-list-card-component',
  imports: [CommonModule],
  template: `
<!-- EJERCICIO PRÁCTICO #2 
 
Crear un componente Angular que muestre una lista de artículos de blog, mejorando su accesibilidad mediante:

1. Uso correcto de etiquetas semánticas HTML5

2. Implementación de atributos ARIA necesarios

3. Corrección de errores detectados por WAVE

-->
<div class="container">
  <div class="header">
    <h1>Últimos Artículos</h1>
    <div class="search">
      <input type="text">
      <div class="search-button">Buscar</div>
    </div>
  </div>

  <div class="content">
    <div class="post" *ngFor="let post of posts">
      <div class="image">
        <img [src]="post.imageUrl">
      </div>
      <div class="post-content">
        <h2 (click)="openPost(post.id)">{{ post.title }}</h2>
        <p>{{ post.excerpt }}</p>
        <div class="date">Publicado: {{ post.date }}</div>
        <div class="read-more" (click)="openPost(post.id)">Leer artículo completo</div>
      </div>
    </div>
  </div>

  <div class="pagination">
    <div class="page" (click)="changePage(1)">1</div>
    <div class="page" (click)="changePage(2)">2</div>
    <div class="page" (click)="changePage(3)">3</div>
  </div>

  <div class="related">
    <h3>Artículos Relacionados</h3>
    <div class="related-post" *ngFor="let related of relatedPosts">
      <div>{{ related.title }}</div>
    </div>
  </div>

  <div class="footer">
    <div>© 2023 Mi Blog Accesible</div>
    <div>Contacto: {{'info@blog.com'}}</div>
  </div>
</div>`,
  styleUrl: './list-card-component.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListCardComponentComponent {
   posts = [
    {
      id: 1,
      title: 'Introducción a la Accesibilidad Web',
      excerpt: 'Aprende los principios básicos de accesibilidad...',
      date: '2023-10-15',
      imageUrl: '/assets/post1.jpg'
    },
    {
      id: 2,
      title: 'Angular y ARIA',
      excerpt: 'Cómo implementar atributos ARIA en componentes Angular...',
      date: '2023-10-22',
      imageUrl: '/assets/post2.jpg'
    }
  ];

  relatedPosts = [
    { id: 3, title: 'Semántica HTML5' },
    { id: 4, title: 'Testing de Accesibilidad' }
  ];

  openPost(id: number) {
    // Lógica para abrir post
  }

  changePage(page: number) {
    // Lógica de paginación
  }
 }
