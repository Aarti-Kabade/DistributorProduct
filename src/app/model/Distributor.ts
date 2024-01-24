import { Product } from "./Product";

export class Distributor {
    distributorId: number;
    name: string;
    contactInfo: string;
    distributionRegion: string;
    orderDate: Date;
    products: Product[];
  product: any;
  
    constructor() {
      this.distributorId = 0;
      this.name = "";
      this.contactInfo = "";
      this.distributionRegion = "";
      this.orderDate = new Date(); // Corrected initialization
      this.products = [];
    }
  }

  