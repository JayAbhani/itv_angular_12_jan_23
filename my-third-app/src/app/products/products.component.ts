import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  productId = 0;
  photoId = 0;

  constructor(private activatedRoute: ActivatedRoute){
    this.activatedRoute.params.subscribe((params)=>{
      this.productId = params['productId'];
      this.photoId = params['photoId'];    
    });
  }
}
