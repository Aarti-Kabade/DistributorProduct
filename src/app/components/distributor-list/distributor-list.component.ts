import { Component } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Distributor } from '../../model/Distributor';
import { of } from 'rxjs/internal/observable/of';
import { DistributorProductServiceService } from '../../service/distributor-product-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-distributor-list',
  templateUrl: './distributor-list.component.html',
  styleUrl: './distributor-list.component.css'
})
export class DistributorListComponent {

  
  public distributor: Observable<Distributor[]> =of([]);
  
  constructor(private service: DistributorProductServiceService,
    private router: Router) {
      
    }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.distributor = this.service.getAllDistributor();
  }

  // updateDetails(id:number)
  //   {
  //     this.router.navigate(['update', id]);
  //   }

  distributorDetails(id: number){
    this.router.navigate(['details', id]);
  }

  // deletePlayer(id:number)
  //   {
  //     return this.service.deletePlayer(id).subscribe((data)=>{
  //       console.log(data);
  //       this.getAll();
  //     })

  //   }

}
