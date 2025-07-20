import { Routes } from '@angular/router';
import { PdfDisplay } from './pdf-display/pdf-display';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: PdfDisplay,
    data: {
      icon: 'home',
      label: 'Home',
    },
  },
];
