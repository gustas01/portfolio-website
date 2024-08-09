import { Component, signal } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  languange = window.location.pathname;

  changeLanguage(language: MatRadioChange) {
    window.location.assign(`${window.location.origin}${language.value}`);
  }
}
