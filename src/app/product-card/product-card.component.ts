import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

interface Producto{
  name: string;
  image: string;
  price: number;
}
@Component({
  selector: 'app-product-card',
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {

  public product: Producto = {
    name: "Producto de compra",
    image: "https://th.bing.com/th/id/OIP.88EgFXMnSkuid-7bBWeztwHaE8?r=0&o=7rm=3&rs=1&pid=ImgDetMain&cb=idpwebpc2",
    price: 12.99
  }
  addToCart(){

  }
 }
