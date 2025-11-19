import { Routes } from '@angular/router';

import { AcasaPage } from './pages/acasa.page';
import { DespreNoiPage } from './pages/despre-noi.page';
import { ContactPage } from './pages/contact.page';
import { ServiciiPage } from './pages/servicii.page';
import { InformatiiUtilePage } from './pages/informatii-utile.page';
import { FacilitatiPage } from './pages/facilitati.page';

export const routes: Routes = [
  { path: '', redirectTo: 'acasa', pathMatch: 'full' },
  { path: 'acasa', component: AcasaPage, title: 'People for People – Acasă' },
  { path: 'despre-noi', component: DespreNoiPage, title: 'People for People – Despre noi' },
  { path: 'servicii', component: ServiciiPage, title: 'People for People – Servicii' },
  { path: 'facilitati', component: FacilitatiPage, title: 'People for People – Facilități' },
  { path: 'informatii-utile', component: InformatiiUtilePage, title: 'People for People – Informații utile' },
  { path: 'contact', component: ContactPage, title: 'People for People – Contact' },
  { path: '**', redirectTo: 'acasa' },
];
