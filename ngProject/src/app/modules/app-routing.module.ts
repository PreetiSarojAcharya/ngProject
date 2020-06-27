import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FirstlinkComponent } from '../layouts/firstlink/firstlink.component';
import { SecondlinkComponent } from '../layouts/secondlink/secondlink.component';
import { ThirdlinkComponent } from '../layouts/thirdlink/thirdlink.component';

const appRoutes: Routes = [
  { path: 'born', component: FirstlinkComponent },
  { path: 'annaprasan', component: SecondlinkComponent },
  { path: 'birthday', component: ThirdlinkComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
