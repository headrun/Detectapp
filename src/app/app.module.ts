import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import * as firebase from 'firebase';
import { VideoPlayer } from '@ionic-native/video-player';
import { Camera } from '@ionic-native/camera';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { Network } from '@ionic-native/network';

firebase.initializeApp({
     //Initialize firebase
      apiKey: "AIzaSyDEsAr8t7S8Os2wDUYpRwudgnC1DFZUZr8",
      authDomain: "doctorseventmanagement-908e5.firebaseapp.com",
      databaseURL: "https://doctorseventmanagement-908e5.firebaseio.com",
      projectId: "doctorseventmanagement-908e5",
      storageBucket: "doctorseventmanagement-908e5.appspot.com",
      messagingSenderId: "835263747484"
});

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
    ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    ScreenOrientation,
    VideoPlayer,
    Camera,
    SplashScreen,
    Network,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}


