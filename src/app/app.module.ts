import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { StarComponent } from './shared/star.component';
import { ConvertToSpace } from './shared/convert-to-spaces.pipe';
import { ProductService } from './products/product.service';


@NgModule({
  declarations: [
    AppComponent, ProductListComponent, StarComponent, ConvertToSpace
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
