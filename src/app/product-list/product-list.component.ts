import { Product } from './../Models/product';
import { Component, OnInit } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreDocument
} from "@angular/fire/firestore";

import { Observable } from "rxjs";
@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  private itemDoc: AngularFirestoreDocument<Product>;
  products: Product[];

  constructor(private afs: AngularFirestore) {
    this.afs.collection('Products').valueChanges().subscribe((products)=>{
      this.products=products;
      
    })
  }
  getProducts(){
    return this.products;
  }
  update(item: Product) {
    this.itemDoc.update(item);
  }
  ngOnInit() {}
}
