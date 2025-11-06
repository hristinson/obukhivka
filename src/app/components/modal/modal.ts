import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.html',
  styleUrls: ['./modal.scss'],
  imports: [CommonModule],
})
export class ModalComponent implements OnInit {
  isModalOpen = false;

  constructor(private modalService: ModalService, private cartService: CartService) {}

  ngOnInit(): void {
    this.modalService.isModalOpen$.subscribe((isOpen) => {
      this.isModalOpen = isOpen;
    });
  }

  add() {
    this.cartService.addToCart();
  }

  close() {
    this.modalService.closeModal();
  }
}
