import { Component } from '@angular/core';
import { SortEvent } from 'primeng/api';
import { Table } from 'primeng/table';
import { Product } from 'src/app/shared/domain/product';
import { ProductService } from 'src/app/shared/services/product.service';
import { Router } from '@angular/router';

@Component({
   selector: 'table-gridlines-demo',
  templateUrl: './table-page.component.html',
   
})
export class TablePageComponent{
  Products!: Product[];

  constructor(private router: Router, private productService: ProductService) {}

  ngOnInit() {
      this.productService.getProductsWithOrders().then((data) => {
          this.Products = data;
      });
  }
  statuses!: any[];
  loading: boolean = false;

  clear(table: Table) {
    table.clear();
}
  customSort(event: SortEvent) {
      event.data!.sort((data1, data2) => {
          let value1 = data1[event.field!];
          let value2 = data2[event.field!];
          let result = null;

          if (value1 == null && value2 != null) result = -1;
          else if (value1 != null && value2 == null) result = 1;
          else if (value1 == null && value2 == null) result = 0;
          else if (typeof value1 === 'string' && typeof value2 === 'string') result = value1.localeCompare(value2);
          else result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;

          return event.order! * result;
      });
  }
  navigateToDetailPage(product: any) {
    this.router.navigate(['/reactive/detalles', product.id]);
}

}
