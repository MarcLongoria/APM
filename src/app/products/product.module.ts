import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ConvertToSpace } from '../shared/convert-to-spaces.pipe';
import { StarComponent } from '../shared/star.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductService } from './product.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([{path: 'products', component: ProductListComponent}, {path: 'products/:id', component: ProductDetailComponent}])
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpace,
    StarComponent
  ],
  providers: [ProductService]
})
export class ProductModule { }
