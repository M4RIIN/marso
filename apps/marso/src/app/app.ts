import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly navItems = [
    { label: 'Accueil', path: '/' },
    { label: 'Monteur vidéo', path: '/monteur-video' },
  ];
  protected readonly currentYear = new Date().getFullYear();
}
