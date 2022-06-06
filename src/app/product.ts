export class Product {
    properties: any;
    constructor(properties: any){
        this.properties = properties;
    }

    get name(): string {
        return `Product ID: ${this.properties.ProductId}`;
    }
}



