import { Component, OnInit } from '@angular/core';
import { Advertising } from '../advertising/advertising';
import { NetlifyApiService } from '../../services/netlify';

@Component({
  selector: 'app-content',
  imports: [Advertising],
  templateUrl: './content.html',
  styleUrl: './content.scss',
})
export class Content {
  result: string = 'empty';

  constructor(private netlifyApi: NetlifyApiService) {}

  ngOnInit(): void {
    this.netlifyApi.getTestResult().subscribe({
      next: (data) => {
        this.result = data.result;
      },
      error: (err) => {
        console.error('Error fetching data:', err);
      },
    });
  }
}
