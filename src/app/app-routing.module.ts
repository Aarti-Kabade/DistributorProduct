import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './components/add-product/add-product.component';
import { AddDistributorComponent } from './components/add-distributor/add-distributor.component';
import { DistributorProductDetailsComponent } from './components/distributor-product-details/distributor-product-details.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { DistributorListComponent } from './components/distributor-list/distributor-list.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';

const routes: Routes = [
  {path:'add', component:AddProductComponent},
  {path:'addDistributor', component:AddDistributorComponent},
  {path:'details/:distributorId', component:DistributorProductDetailsComponent},
  {path:'', component:ProductListComponent},
  {path:'distributorList', component:DistributorListComponent },
  // {path:'companyrawlist', component:CompanymateriallistComponent},
  {path:'update/:productId', component:UpdateProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
