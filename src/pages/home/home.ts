import { Component, Input} from '@angular/core';
import { NavController, AlertController, ToastController, LoadingController, Platform, TabHighlight, IonicPage} from 'ionic-angular';
import * as firebase from 'firebase';


@IonicPage({
  name: 'HomePage'
})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  verificationId: any;
  code: string = "";
  isExist: boolean = false;
  url:string;
  timer:number = 60;

  public recaptchaVerifier: firebase.auth.RecaptchaVerifier;
  phoneNumber: any;
  password: any;

  splash = true;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public toastCtrl: ToastController,
              public loadingCtrl: LoadingController, public platform: Platform) {
      
  }

  ionViewDidLoad(){
    // Recaptcha is initilaizing
    this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
      'size':'invisible',
      'callback': function(response) {
        console.log(response);
      }
    });
  }

  ionViewWillEnter() {

    firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        this.navCtrl.push("NewsPage").then(() => {
          const index = this.navCtrl.getActive().index;
          this.navCtrl.remove(0, index);
        });
      }
    });
  }

  loginUser(){
    let navCtrl = this.navCtrl;
    let isExist = this.isExist;

    try{
      (<any>window).AccountKitPlugin.loginWithPhoneNumber({
        useAccessToken: true,
        defaultCountryCode: "IN",
        facebookNotificationsEnabled: true
      }, (data) => {
        (<any>window).AccountKitPlugin.getAccount((info) =>{
          console.log(JSON.stringify(info));

          window.localStorage.setItem('token',JSON.stringify(info));
          window.localStorage.setItem('phoneNo',JSON.stringify(info.phoneNumber));
          window.localStorage.setItem('accountId',JSON.stringify(info.accountId));
          // var token = window.localStorage.getItem('token');
          // alert(token);

          firebase.auth().signInAnonymously().then(suc =>{

            firebase.database().ref('userDetails').orderByChild('mobileNo').on('value', function(snapshot){
              snapshot.forEach(function(childsnap){
                console.log('mobNo----'+childsnap.val().mobileNo);
                console.log('FirstName----'+childsnap.val().firstName);
                console.log('fbKitPhn----'+info.phoneNumber);
                console.log(childsnap.val().mobileNo == info.phoneNumber);
                console.log(childsnap.val().firstName == '');
  
                if(childsnap.val().mobileNo === info.phoneNumber){
  
                  this.navCtrl.push("NewsPage").then(() => {
                    const index = this.navCtrl.getActive().index;
                    this.navCtrl.remove(0, index);
                  });
                    isExist = true;
  
                }
                
              });
  
              // console.log(isExist);
  
              if(!isExist){
        
                  navCtrl.push("ProfilePage", {
                  phoneNo: info.phoneNumber,
                  userid: info.accountId
                });
              
              }
            });


          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage);
            // ...
          });

        })
      }, (err) =>{
        console.log(JSON.stringify(err));
      })

    }catch(e){
      console.log(e);
    }
  }
}