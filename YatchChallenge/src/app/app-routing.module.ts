import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcquistoComponent } from './acquisto/acquisto.component';
import { HomeComponent } from './home/home.component';
import { InOffertaComponent } from './in-offerta/in-offerta.component';
import { LoginComponent } from './login/login.component';
import { MioNoleggioComponent } from './mio-noleggio/mio-noleggio.component';
import { TutteComponent } from './tutte/tutte.component';

import { AuthGuard } from './auth.guard';
import { NavComponent } from './nav/nav.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'tutte', component:TutteComponent},
  {path: 'in-offerta', component:InOffertaComponent},
  {path: 'mio-noleggio', component:MioNoleggioComponent},
  {path: 'nav', component: NavComponent, canActivate: [AuthGuard]},
  {path: 'login', component:LoginComponent},
  {path: 'acquisto/:id', component: AcquistoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
