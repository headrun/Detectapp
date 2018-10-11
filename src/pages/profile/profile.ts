import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import * as firebase from 'firebase';

@IonicPage({
  'name':'ProfilePage'
})
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  firstName: string = "";
  lastName: string = "";
  emailAddress: string = "";
  specialisation: string = "";
  designation: string = "";
  general: string = "";
  experience: string = "";
  onco: string = "";
  showSpecialisation: boolean = false;
  showOnco: boolean = false;
  showGeneral: boolean = false;
  group_id:Array<string> = [];
  COMETCHAT_DATA: string = '';
  URL: string = 'https://api.cometondemand.net/api/v2/createUser';

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  saveprofile(){
    var navCtlr = this.navCtrl;
    var navParams = this.navParams;
    var toastCtrl = this.toastCtrl;
    var date = new Date().getTime();
    let count = 0;

    if (this.firstName === '') {
      const toast = toastCtrl.create({
        message:'Please enter your first name',
        duration: 1000,
      });
      toast.present();
      return false;
    }

    if (this.lastName === '') {
      const toast = toastCtrl.create({
        message:'Please enter your last name',
        duration: 1000,
      });
      toast.present();
      return false;
    }

    if (this.emailAddress === '') {
      const toast = toastCtrl.create({
        message:'Please enter valid email Address',
        duration: 1000,
      });
      toast.present();
      return false;
    }

    if (this.designation === '') {
      const toast = toastCtrl.create({
        message:'Please select your designation',
        duration: 1000,
      });
      toast.present();
      return false;
    }

    if (this.specialisation === '') {
      const toast = toastCtrl.create({
        message:'Please select your specialisation',
        duration: 1000,
      });
      toast.present();
      return false;
    }

    if(this.showGeneral){

      if (this.general === '') {
        const toast = toastCtrl.create({
          message:'Please select your general pathology',
          duration: 1000,
        });
        toast.present();
        return false;
      }

    }

    if(this.showOnco){

      if (this.onco === '') {
        const toast = toastCtrl.create({
          message:'Please select your oncopathology',
          duration: 1000,
        });
        toast.present();
        return false;
      }

    }

    if (this.experience === '') {
      const toast = toastCtrl.create({
        message:'Please select your experince',
        duration: 1000,
      });
      toast.present();
      return false;
    }

    

    console.log('working');
          // var user = firebase.auth().currentUser;
          let userid = window.localStorage.getItem('accountId').replace("\"", "").replace("\"", "");
          let phoneNumber = window.localStorage.getItem('phoneNo').replace("\"", "").replace("\"", "");
          let obj = {

            firstName: this.firstName,
            lastName:this.lastName,
            emailId: this.emailAddress,
            role: this.designation,
            specialisation: this.specialisation,
            generalPathology: this.general,
            oncopathology: this.onco,
            experience: this.experience,
            createdAt: date,
            updatedAt: date,
            deletedAt: '',
            createdBy: '',
            updatedBy: '',
            deletedBy: '',
            userid: userid,
            mobileNo: phoneNumber,
            group_id:this.group_id,
            profile_pic: '',
            is_active:true
            };
          firebase.database().ref('userDetails/').push(obj).then((res)=>{
            console.log(res);
            this.COMETCHAT_DATA  = 'UID='+phoneNumber+'&name='+this.firstName+' '+this.lastName;
           let ajax = new XMLHttpRequest();
           // ajax.withCredentials = true;
           console.log(this.COMETCHAT_DATA);
           ajax.addEventListener('readystatechange', function(){
             if(this.readyState === this.DONE) {
               console.log(this.responseText);
             }
           });

           ajax.open("POST", this.URL);
           ajax.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
           ajax.setRequestHeader("api-key", '51635xbb473bfea3a57da0c77a360f380153cd');
           ajax.send(this.COMETCHAT_DATA);
          });
        this.navCtrl.push("NewsPage").then(() => {
        const index = this.navCtrl.getActive().index;
        this.navCtrl.remove(0, index);
        });
      

  }

  DesignationFn(){

       console.log(this.designation);
       if(this.designation.toLowerCase() === "Doctor".toLowerCase()){
        this.showSpecialisation = true;
       }else{
         var designation = this.designation;
         this.showSpecialisation = false;
         this.showGeneral = false;
         this.showOnco = false;
         firebase.database().ref('groups').orderByKey().on('child_added', (datasnapshot)=>{
          let spec_list = datasnapshot.val().specialization;
          for (let spec of spec_list) {
            if(spec.toLowerCase() === designation.toLowerCase()) {
              this.group_id.push(datasnapshot.key);
              let obj = datasnapshot.val();
              obj['followers'] += 1;
              firebase.database().ref('groups').child(datasnapshot.key).set(obj).then(onFullFilled=>{
                console.log('Followers updated successfully!');
              }, (err)=>{
                console.log('Follwers problem');
              })
            }
          }
        });
       }
  }

  specialisationFn(){
    console.log(this.specialisation);
    if(this.specialisation.toLowerCase() === "General Pathology".toLowerCase()){
      this.showGeneral = true;
      this.showOnco = false;
    }else if(this.specialisation.toLowerCase() === "Oncopathology".toLowerCase()){
      this.showGeneral = false;
      this.showOnco = true;
    }
  }

  generalFn(){

    var general = this.general;
    firebase.database().ref('groups').orderByKey().on('child_added', (datasnapshot)=>{
      let spec_list = datasnapshot.val().specialization;
      for (let spec of spec_list) {
        if( spec.toLowerCase() === general.toLowerCase()) {
          this.group_id.push(datasnapshot.key);
          let obj = datasnapshot.val();
          obj['followers'] += 1;
          firebase.database().ref('groups').child(datasnapshot.key).set(obj).then(onFullFilled=>{
            console.log('Followers updated successfully!');
          }, (err)=>{
            console.log('Follwers problem');
          });
        }
      }
    });
  }

  oncoFn(){

    console.log(this.onco);
    var onco = this.onco;
    firebase.database().ref('groups').orderByKey().on('child_added', (datasnapshot)=>{
      let spec_list = datasnapshot.val().specialization;
      for (let spec of spec_list) {
        if(spec === onco) {
          this.group_id.push(datasnapshot.key);
          let obj = datasnapshot.val();
          obj['followers'] += 1;
          firebase.database().ref('groups').child(datasnapshot.key).set(obj).then(onFullFilled=>{
            console.log('Followers updated successfully!');
          }, (err)=>{
            console.log('Follwers problem');
          });
        }
      }
    });
  }

}
