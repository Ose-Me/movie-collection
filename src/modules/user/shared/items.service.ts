import { Injectable } from "@angular/core";

@Injectable()
export class ItemsService {
  getItems() {
    return ITEMS;
  }
}

const ITEMS = [
  {
    id: 1,
    imgUrl: "../../../assets/images/shirt-3.png",
    name: "New look T-shirt in Gradient Fade",
    price: 13.45,
  },
  {
    id: 1,
    imgUrl: "../../../assets/images/shirt-1.png",
    name: "Classic Gradient Fade",
    price: 14.05,
  },
  {
    id: 1,
    imgUrl: "../../../assets/images/shirt-4.png",
    name: "Surburban T-shirt",
    price: 30.0,
  },
  {
    id: 1,
    imgUrl: "../../../assets/images/shirt-2.png",
    name: "shirt in Gradient Fade",
    price: 19.45,
  },
  {
    id: 1,
    imgUrl: "../../../assets/images/shirt-1.png",
    name: "New Summer Fade",
    price: 20.85,
  },
  {
    id: 1,
    imgUrl: "../../../assets/images/shirt-3.png",
    name: "New look T-shirt in Gradient Fade",
    price: 3.45,
  },
];
