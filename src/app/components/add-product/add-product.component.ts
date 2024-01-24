import { Component } from '@angular/core';
import { Product } from '../../model/Product';
import { DistributorProductServiceService } from '../../service/distributor-product-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {

  products=new Product();
  constructor(private service:DistributorProductServiceService,
    private router: Router) {
    
     }

  onSubmit()
  {
      this.save();
  }

  save()
  {
    this.service.addProduct(this.products).subscribe();
   
      this.gotoHomePage();
   
  }

  gotoHomePage(){
    this.router.navigate(['/']);
  }

  Product(){
    this.router.navigate(['productList']);
  }
}
