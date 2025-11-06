import { Component, OnInit } from '@angular/core';
import { Advertising } from '../advertising/advertising';
import { NetlifyApiService } from '../../services/netlify';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-content',
  imports: [Advertising, CommonModule],
  templateUrl: './content.html',
  styleUrl: './content.scss',
})
export class Content {
  result: Array<any> = [];

  constructor(private netlifyApi: NetlifyApiService) {}
  ngOnInit(): void {
    this.netlifyApi.getTestResult().subscribe({
      next: (data) => {
        this.result = data.products;
        console.log(data.products);
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
