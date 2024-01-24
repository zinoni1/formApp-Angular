import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/domain/product';
import { ProductService } from 'src/app/shared/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';

@Component({
   selector: 'data-view-basic-demo',
  templateUrl: './focus-product.component.html',
   
})
export class FocusPageComponent implements OnInit{
  Products!: Product[];
first: any;

  constructor(private route: ActivatedRoute, private productService: ProductService) {}
 productId!: string | null;
 productoId!: string;
 product!: Product;
  ngOnInit() {
    this.productService.getProductsWithOrders().then((data) => {
        this.Products = data;
        this.productId = this.route.snapshot.paramMap.get('id');
        this.productoId = this.productId!;
      this.loadProductDetails();
    });
  }
  
loadProductDetails() {
    from(this.productService.getProductById(this.productoId)).subscribe(
        (product: { id: string; code: string; name: string; description: string; image: string; price: number; category: string; quantity: number; inventoryStatus: string; rating: number; } | undefined) => {
            this.product = product as Product;
        },
        (err: any) => console.log(err)
    );
}
getSeverity (product: Product) {
  switch (product.inventoryStatus) {
      case 'INSTOCK':
          return 'success';

      case 'LOWSTOCK':
          return 'warning';

      case 'OUTOFSTOCK':
          return 'danger';

      default:
          return '';
  }
};
}
