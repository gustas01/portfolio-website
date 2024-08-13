import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'portfolio';

  languange = window.location.pathname;

  changeLanguage(language: string) {
    console.log(`${window.location.origin}/${language}`);

    window.location.assign(`${window.location.origin}${language}`);
  }
}
