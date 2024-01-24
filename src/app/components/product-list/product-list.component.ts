import { Component } from '@angular/core';
import { DistributorProductServiceService } from '../../service/distributor-product-service.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Product } from '../../model/Product';
import { of } from 'rxjs/internal/observable/of';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  public products: Observable<Product[]> =of([]);
  
  constructor(private service: DistributorProductServiceService ,
    private router: Router) {
      
    }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.products = this.service.getAllProduct();
  }


  addDistributor()
  {
    this.router.navigate(['addDistributor']);
  }

  // updateDetails(id:number)
  //   {
  //     this.router.navigate(['update', id]);
  //   }

  // playerDetails(id: number){
  //   this.router.navigate(['details', id]);
  // }

  // deletePlayer(id:number)
  //   {
  //     return this.service.deletePlayer(id).subscribe((data)=>{
  //       console.log(data);
  //       this.getAll();
  //     })

  //   }
}
