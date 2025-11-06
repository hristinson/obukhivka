import { Component, ViewEncapsulation } from '@angular/core';
import { Button } from '../button/button';
import { CartService } from '../../services/cart.js';
import { ModalService } from '../../services/modal';

@Component({
  selector: 'app-header',
  imports: [Button],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  cartCount: number = 0;

  constructor(private cartService: CartService, private modalService: ModalService) {}

  ngOnInit(): void {
    this.cartService.cartCount$.subscribe((count) => {
      this.cartCount = count;
    });
  }

  openModal() {
    this.modalService.openModal(); // Відкриваємо модалку
  }
}
