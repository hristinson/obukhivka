import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-advertising',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './advertising.html',
  styleUrls: ['./advertising.scss'],
})
export class Advertising {
  pokemonIds: number[] = Array.from({ length: 30 }, (_, i) => i + 1);

  getPokemonImageUrl(id: number): string {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/${id}.png`;
  }
}
