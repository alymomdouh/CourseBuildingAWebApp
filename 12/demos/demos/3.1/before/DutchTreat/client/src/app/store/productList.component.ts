import { Component } from "@angular/core";

@Component({
  selector: "product-list",
  templateUrl: "./productList.component.html"
})
export class ProductList {

  constructor() {
    console.log("In Product List");
  }

  public products = [{
    title: "Some Product",
    price: 19.99
  }, {
    title: "Another Product",
    price: 14.99
  }];
}