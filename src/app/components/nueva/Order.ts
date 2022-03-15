import { Product } from "./Product";

export class Order {
    poNbr: number;
    shipTo: string;
    incortem: string;
    soldTo: string;
    source: string;
    eta: any;
    etd: any;
    country: string;
    products: Product []

    constructor(poNbr: number, shipTo: string, incortem: string, soldTo: string, source: string, eta: any, etd: any, country: string, products: Product[]) {
        this.poNbr = poNbr;
        this.shipTo = shipTo;
        this.incortem = incortem;
        this.soldTo = soldTo;
        this.source = source;
        this.eta = eta;
        this.etd = etd;
        this.country = country;
        this.products = products
    }
  
    
}