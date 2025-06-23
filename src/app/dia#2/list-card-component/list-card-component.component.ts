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
<!-- El contenedor debe ser un section en vez de un div -->
<main class="container">
  <!-- El header debe usar una etiqueta header, no un div -->
  <header class="header">
    <h1>Últimos Artículos</h1>
    <!-- Respecto al buscador, acá debemos cambiar el div por un label, y le agregaremos los atributos
    correctos 
    -->
    <div role="search" class="search">
      <label for="searcher" > Buscar artículos</label>
      <input aria-label="searcher" name="searcher" type="text">
      <!-- El div debe ser un button -->
      <button role="button"  type="submit"  class="search-button">Buscar</button>
  
    </div>
  </header>
  <!-- El div debe ser cambiado por un section -->
  <section class="content">
    <!-- El div debe ser cambiado por un article -->
    <article role="article" class="post" *ngFor="let post of posts; let i = index">
      <div class="image">
        <!-- A la imagen hay que asignarle un texto alternativo, tener en cuenta que no debe ser el mismo texto
        porque marca como una alerta 
        -->
        <img [src]="post.imageUrl" [alt]="'imagen del post'+i">
      </div>
      <div class="post-content">
        <h2 (click)="openPost(post.id)">{{ post.title }}</h2>
        <p>{{ post.excerpt }}</p>
        <div class="date">Publicado: {{ post.date }}</div>
        <!-- Este div debe ser cambiado por una etiqeuta a -->
        <a class="read-more" (click)="openPost(post.id)">Leer artículo completo</a>
      </div>
    </article>
  </section>
  <!-- Este div lo debo cambiar por un nav -->
  <nav  class="pagination">
    <!-- Los siguientes div los cambiaré por unos button -->
    <button class="page" (click)="changePage(1)">1</button>
    <button class="page" (click)="changePage(2)">2</button>
    <button class="page" (click)="changePage(3)">3</button>
  </nav>
  <!-- El div debe ser cambiado por un aside -->
  <aside class="related">
    <h3>Artículos Relacionados</h3>
    <div class="related-post" *ngFor="let related of relatedPosts">
      <!-- Este div debe ser cambiado por un h correspondiente -->
      <p>{{ related.title }}</p>
    </div>
  </aside>
<!-- El div debe ser cambiado por un footer -->
  <footer  class="footer">
    <div>© 2023 Mi Blog Accesible</div>
    <div>Contacto: {{'info@blog.com'}}</div>
  </footer>
</main>`,
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
