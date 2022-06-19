import { Component } from '@angular/core';
import { HttpService } from './http.service';   
import { Product } from './product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public dataList: Product[] = [];
  public selectedProduct: Product | null = null;

  constructor(private httpService: HttpService){ }

  ngOnInit(): void {
    this.httpService.getData().subscribe((data: Product[]) => {
        this.dataList = data;
    });
  }

  onSelect(product: Product) {
    this.selectedProduct = product;
  }

  indexOrder = ():number =>{
    return  0;
  }

  closeElem(){
    this.selectedProduct = null;
  }

  replaceValue(itemValue: any){
    return itemValue = itemValue === null ? "it's unknown" : itemValue;
  }
}
