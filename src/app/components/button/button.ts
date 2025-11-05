import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {
  @Input() text: string = 'Button';
  // text: string = 'asdsads';

  // ngOnInit() {
  //   console.table('Yea!!!!....');
  // }
}
