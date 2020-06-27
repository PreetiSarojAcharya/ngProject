import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { ThirdlinkComponent } from './layouts/thirdlink/thirdlink.component';
import { SecondlinkComponent } from './layouts/secondlink/secondlink.component';
import { FirstlinkComponent } from './layouts/firstlink/firstlink.component';
import { NavComponent } from './layouts/nav/nav.component';
import { MainimageComponent } from './layouts/mainimage/mainimage.component';
import { ParentBornComponent } from './firstlink/parent-born/parent-born.component';
import { AppRoutingModule } from './modules/app-routing.module';
//import { BornFirstComponent } from './firstlink/parentBorn/born-first/born-first.component';

const appRoutes: Routes = [
  { path: 'born', component: FirstlinkComponent },
  { path: 'annaprasan', component: SecondlinkComponent },
  { path: 'birthday', component: ThirdlinkComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ThirdlinkComponent,
    SecondlinkComponent,
    FirstlinkComponent,
    NavComponent,
    MainimageComponent,
    ParentBornComponent,
    //  BornFirstComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
