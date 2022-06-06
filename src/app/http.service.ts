import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map, Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getData(): Observable<Product[]> {
    return this.http.get<any[]>("./assets/DATA.json").pipe(map(
      (data:any[]): Product[] => data.map((product:any): Product => new Product(product))
    ));
  }

}
