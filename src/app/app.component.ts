import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductCardComponent } from './product-card/product-card.component';
import { DropdownComponentComponent } from "./dropdown-component/dropdown-component.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductCardComponent, DropdownComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'project-semantica';
}
