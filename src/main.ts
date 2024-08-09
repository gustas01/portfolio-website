/// <reference types="@angular/localize" />

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { registerLocaleData } from '@angular/common';

import localePt from '@angular/common/locales/pt';
import localePtExtra from '@angular/common/locales/extra/pt';

registerLocaleData(localePt, 'pt-br', localePtExtra);

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
