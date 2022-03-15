export class Product {
    sku: string;
    description: string;
    quantity: number;
    typeContainer: string;
    quantityContainer: number;
    loading: number;
    minimumOrder: number;
    pallets: number;
    shipmentType: string;
    etd: any;

    constructor(sku: string, description: string, quantity: number, typeContainer: string, quantityContainer: number, loading: number, minimumOrder: number, pallets: number, shipmentType: string) {
        this.sku = sku;
        this.description = description;
        this.quantity = quantity;
        this.typeContainer = typeContainer;
        this.quantityContainer = quantityContainer;
        this.loading = loading;
        this.minimumOrder = minimumOrder;
        this.pallets = pallets;
        this.shipmentType = shipmentType;
    }

   
}