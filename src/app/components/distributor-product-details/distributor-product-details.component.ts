import { Component } from '@angular/core';
import { Distributor } from '../../model/Distributor';
import { ActivatedRoute, Router } from '@angular/router';
import { DistributorProductServiceService } from '../../service/distributor-product-service.service';

@Component({
  selector: 'app-distributor-product-details',
  templateUrl: './distributor-product-details.component.html',
  styleUrl: './distributor-product-details.component.css'
})
export class DistributorProductDetailsComponent {

  distributorId: number = 0;
  visit=false;
  distributor: Distributor = new Distributor();
  

  constructor(private route: ActivatedRoute, private router: Router,
    private service: DistributorProductServiceService) { }

  ngOnInit() {
    this.distributor = new Distributor();

    this.distributorId = this.route.snapshot.params['distributorId'];

    this.service.getOneDistributor(this.distributorId).subscribe((data) => {
      console.log(data);
      this.distributor = data;
      console.log(this.distributor)
      this.visit=true;
      

    })
  }

  list() {
    this.router.navigate(['distributorList']);
  }
}
