import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private items: any[] = [];
  private cartCountSubject = new BehaviorSubject<number>(0);

  cartCount$ = this.cartCountSubject.asObservable();

  constructor() {}

  addToCart(item?: any) {
    this.items.push(item);
    this.updateCartCount();
  }

  removeFromCart(item: any) {
    this.items = this.items.filter((i) => i.id !== item.id);
    this.updateCartCount();
  }

  private updateCartCount() {
    this.cartCountSubject.next(this.items.length);
  }

  getItems() {
    return this.items;
  }
}
