import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributorProductDetailsComponent } from './distributor-product-details.component';

describe('DistributorProductDetailsComponent', () => {
  let component: DistributorProductDetailsComponent;
  let fixture: ComponentFixture<DistributorProductDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DistributorProductDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DistributorProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
