import { Component } from '@angular/core';
import { version } from '../../../environments/version.js';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  version: string = version;
}
