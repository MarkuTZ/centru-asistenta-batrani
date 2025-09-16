import { Routes } from '@angular/router';

import { AcasaPage } from './pages/acasa.page';
import { DespreNoiPage } from './pages/despre-noi.page';
import { ContactPage } from './pages/contact.page';

export const routes: Routes = [
  { path: '', redirectTo: 'acasa', pathMatch: 'full' },
  { path: 'acasa', component: AcasaPage, title: 'People for People – Acasă' },
  { path: 'despre-noi', component: DespreNoiPage, title: 'People for People – Despre noi' },
  { path: 'contact', component: ContactPage, title: 'People for People – Contact' },
  { path: '**', redirectTo: 'acasa' },
];
