import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { TestPage } from '../pages/test/test';
import { IntroPage } from '../pages/intro/intro'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {HttpModule} from "@angular/http"

import { TestPageModule } from '../pages/test/test.module';
import { IntroPageModule } from '../pages/intro/intro.module'
import { MoovieProvider } from '../providers/moovie/moovie';
//Não colocar em 2 declarações
@NgModule({
  declarations: [
    MyApp,
    HomePage, 
    ListPage, 
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    TestPageModule,
    IntroPageModule,
    HttpModule  //Modulo Http
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    TestPage,
    IntroPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MoovieProvider
  ]
})
export class AppModule {}
