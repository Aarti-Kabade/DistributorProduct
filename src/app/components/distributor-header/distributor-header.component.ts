import { Component } from '@angular/core';
import { DistributorProductServiceService } from '../../service/distributor-product-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-distributor-header',
  templateUrl: './distributor-header.component.html',
  styleUrl: './distributor-header.component.css'
})
export class DistributorHeaderComponent {

  constructor(private service:DistributorProductServiceService,
    private router: Router) { }

    distributorHome(){
      this.router.navigate([''])
    }
  

  addProduct(){
    this.router.navigate(['add']);
  }

  // addSupplier()
  // {
  //   this.router.navigate(['addSupplier']);
  // }

  distributorList()
  {
    this.router.navigate(['distributorList']);
  }

  productList()
  {
    this.router.navigate(['productList']);
  }

  // companymaterialList()
  // {
  //   this.router.navigate(['companyrawlist']);
  // }

}
