﻿import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Order, OrderItem } from "./order";
import { Product } from "./product";

@Injectable()
export default class Store {

  order = new Order();
  products: Observable<Product[]>;

  constructor(private http: HttpClient) { }

  async loadProducts() {
    const result = await this.http.get<Observable<Product[]>>("/api/products").toPromise();
    this.products = result;
    return true;
  }

  addToOrder(product: Product) {
    let item: OrderItem = this.order.items.find(item => item.productId === product.id);

    if (item) {
      item.quantity++;
    } else {
      item = new OrderItem();
      item.productId = product.id;
      item.productArtId = product.artId;
      item.productArtist = product.artist;
      item.productCategory = product.category;
      item.productTitle = product.title;
      item.productSize = product.size;
      item.quantity = 1;
      item.unitPrice = product.price;
      this.order.items.push(item);
    }

  }

}