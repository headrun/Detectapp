import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, AlertController} from 'ionic-angular';
import * as firebase from 'firebase';
/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  'name': 'SettingsPage'
})
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  
  user = firebase.auth().currentUser;
  pro_img:string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public _app: App, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
    // var showprofile = this.showprofile;

    // var that = this;
    // var profilename = that.profilename;
    //
    // firebase.auth().onAuthStateChanged(function(user){
    //   if(user){
    //     firebase.database().ref('userDetails').orderByChild('userid').on('value', function(snapshot){
    //       snapshot.forEach(function(childsnap){
    //         if(childsnap.val().userid === user.uid){
    //           that.profilename = childsnap.val().firstName+" "+childsnap.val().lastName;
    //           console.log(that.profilename);
    //         }
    //       });
    //     });
    //   }
    //
    // });
    if(this.user) {
      firebase.database().ref('userDetails').orderByChild('mobileNo').equalTo(this.user.phoneNumber).on('child_added', (snapshot)=>{
        if(snapshot.val().profile_pic != undefined && snapshot.val().profile_pic != ''){
          this.pro_img = snapshot.val().profile_pic;
        }else{
          this.pro_img = 'assets/imgs/pro_pic_placeholder.png';
        }
      });
    }
  }

  logout(){
    var navCtrl = this.navCtrl;
    var _app = this._app;

    let alert = this.alertCtrl.create({
      title: 'Log Out',
      message: 'Are you sure you want to Logout?',
      buttons: [
          {
              text: 'No',
              handler: () => {
                  console.log('Cancel clicked');
              }
          },
          {
              text: 'Yes',
              handler: () => {
                // window.localStorage.removeItem('token');
                // _app.getRootNav().setRoot(HomePage).then((res) => {
                //       // let index = 1;
                //       navCtrl.remove(navCtrl.getPrevious().index);
                //     });
                firebase.auth().signOut().then(function() {
                _app.getRootNav().setRoot("HomePage").then((res) => {
                  navCtrl.remove(navCtrl.getPrevious().index);
                });
                 }).catch(function(error) {
                   //console.log(error)
                 })

              }
          }
      ]
  })

  alert.present();

  }

  profilecard(){
  // var navCtrl = this.navCtrl;

    this.navCtrl.push("ProfilecreationPage");
  }

}
