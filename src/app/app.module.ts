import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PhotoList } from '../pages/photo-list/photo-list'
import { WebList } from '../pages/web-list/web-list'
import { VideoList} from '../pages/video-list/video-list'
import { GlobalserviceProvider } from '../providers/globalservice/globalservice';

@NgModule({
  declarations: [
    MyApp,
    HomePage, 
    PhotoList,
    VideoList,
    WebList,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PhotoList,
    VideoList,
    WebList,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GlobalserviceProvider
  ]
})
export class AppModule {}
