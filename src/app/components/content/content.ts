import { Component } from '@angular/core';
import { Advertising } from '../advertising/advertising';

@Component({
  selector: 'app-content',
  imports: [Advertising],
  templateUrl: './content.html',
  styleUrl: './content.scss',
})
export class Content {}
