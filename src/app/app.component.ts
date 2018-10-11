import { Component } from '@angular/core';
import { Platform, IonicPage } from 'ionic-angular';
import { timer } from 'rxjs/observable/timer';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = "HomePage";
  showSplash = true

  constructor(platform: Platform, private screenOrientation: ScreenOrientation, public spalshScreen: SplashScreen) {
   
    platform.ready().then(() => {  
      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
      this.spalshScreen.hide();
      timer(2000).subscribe(() => this.showSplash = false)
    });
    
  }
}