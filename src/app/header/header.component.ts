import { Component, Renderer2 } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioChange, MatRadioModule } from '@angular/material/radio';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatDividerModule,
    MatMenuModule,
    MatCardModule,
    MatIconModule,
    MatRadioModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  languange = window.location.pathname;

  changeLanguage(language: MatRadioChange) {
    window.location.assign(`${window.location.origin}${language.value}`);
  }

  constructor(private renderer: Renderer2) {}

  addCustomStyles() {
    const menuPanel = document.querySelector('.mat-mdc-menu-panel');
    if (menuPanel) {
      this.renderer.setStyle(menuPanel, 'min-width', 'fit-content');
      this.renderer.setStyle(menuPanel, 'padding-right', '8px');
    }
  }
}
