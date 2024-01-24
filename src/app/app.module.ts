import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';
import { AddDistributorComponent } from './components/add-distributor/add-distributor.component';
import { DistributorListComponent } from './components/distributor-list/distributor-list.component';
import { DistributorProductDetailsComponent } from './components/distributor-product-details/distributor-product-details.component';
import { DistributorHeaderComponent } from './components/distributor-header/distributor-header.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    ProductListComponent,
    UpdateProductComponent,
    AddDistributorComponent,
    DistributorListComponent,
    DistributorProductDetailsComponent,
    DistributorHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
