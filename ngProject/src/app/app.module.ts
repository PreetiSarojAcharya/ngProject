import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { ThirdlinkComponent } from './layouts/thirdlink/thirdlink.component';
import { SecondlinkComponent } from './layouts/secondlink/secondlink.component';
import { FirstlinkComponent } from './layouts/firstlink/firstlink.component';
import { NavComponent } from './layouts/nav/nav.component';
import { MainimageComponent } from './layouts/mainimage/mainimage.component';
import { ParentBornComponent } from './firstlink/parent-born/parent-born.component';
import { AppRoutingModule } from './modules/app-routing.module';
import { BornFirstComponent } from './firstlink/parent-born/born-first/born-first.component';
import { BornSecondComponent } from './firstlink/parent-born/born-second/born-second.component';
import { BornThirdComponent } from './firstlink/parent-born/born-third/born-third.component';
import { BornNavComponent } from './firstlink/parent-born/born-nav/born-nav.component';

import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { OAuthModule } from 'angular-oauth2-oidc';

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
    BornFirstComponent,
    BornSecondComponent,
    BornThirdComponent,
    BornNavComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    OAuthModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
