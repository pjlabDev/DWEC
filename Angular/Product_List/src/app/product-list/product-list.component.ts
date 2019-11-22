import { Component, OnInit } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  products = products;

  constructor() { }

  share() {
    window.alert('El producto ha sido compartido!');
  }

  onNotify() {
    window.alert('Te informamos de que este móvil cuesta mas de 700€');
  }

}
