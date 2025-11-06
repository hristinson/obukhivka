import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Content } from './components/content/content';
import { ModalComponent } from './components/modal/modal';

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [Header, Footer, Content, ModalComponent],
})
export class App {
  protected readonly title = signal('MakeObuhivkaGreatAgain');
}
