import { HomeComponent } from './../home/home.component';
import { BornNavComponent } from './../firstlink/parent-born/born-nav/born-nav.component';
import { BornThirdComponent } from './../firstlink/parent-born/born-third/born-third.component';
import { BornSecondComponent } from './../firstlink/parent-born/born-second/born-second.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SecondlinkComponent } from '../layouts/secondlink/secondlink.component';
import { ThirdlinkComponent } from '../layouts/thirdlink/thirdlink.component';
import { BornFirstComponent } from '../firstlink/parent-born/born-first/born-first.component';
import { ParentBornComponent } from '../firstlink/parent-born/parent-born.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '*', redirectTo: 'home' },
  {
    path: 'born',
    component: BornNavComponent,
    children: [
      { path: '', component: ParentBornComponent },
      {
        path: 'bornfirst',
        component: BornFirstComponent,
      },

      {
        path: 'bornsecond',
        component: BornSecondComponent,
      },

      {
        path: 'bornthird',
        component: BornThirdComponent,
      },
    ],
  },

  { path: 'annaprasan', component: SecondlinkComponent },
  { path: 'birthday', component: ThirdlinkComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
