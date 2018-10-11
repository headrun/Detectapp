import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, ModalController } from 'ionic-angular';
import { SpeakersPage } from '../speakers/speakers';
import { AgendaPage } from '../agenda/agenda';
import * as firebase from 'firebase';
import { ShowGoingUsersPage } from '../show-going-users/show-going-users';
import { QuizPage } from '../quiz/quiz';


@IonicPage({
  'name': 'EventCreationPage'
})
@Component({
  selector:'page-event-creation',
  templateUrl:'event-creation.html'
})
export class EventCreationPage{

  eventData;
  eventid;
  eventStartMonth;
  eventStartDate;
  months_list = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'];
  months_list_short = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  week_days = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
  willflag = 2;
  user = firebase.auth().currentUser;
  goingCount:any = 0;
  usersGng = [];
  eventStartDay: string;
  eventEndDate: number;
  eventEndMonth_short: string;
  eventStartMonth_short: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadCtrl:LoadingController, public toastCtrl:ToastController, public modalCtrl: ModalController) {
    this.eventData = this.navParams.get('eventData');
    console.log(this.eventData);
    this.eventid = this.eventData.eventid;
    this.eventStartMonth = this.months_list[new Date(this.eventData['startDate']).getMonth()];
    this.eventStartDate = new Date(this.eventData['startDate']).getDate();
    this.eventEndDate = new Date(this.eventData['endDate']).getDate();
    this.eventStartMonth_short = this.months_list_short[new Date(this.eventData['startDate']).getMonth()];
    this.eventEndMonth_short = this.months_list_short[new Date(this.eventData['endDate']).getMonth()];
    this.eventStartDay  =  this.week_days[new Date(this.eventData['startDate']).getDay()];
    this.eventData['startDate'] = new Date(this.eventData['startDate']).toDateString();
  }

  ionViewDidLoad(){
    let phoneNumber = window.localStorage.getItem('phoneNo').replace("\"", "").replace("\"", "");
    let that = this;
    that.goingCount = 0;
    if(this.user){
      firebase.database().ref('eventWilling').orderByChild('willIndex').equalTo(this.eventid+'#'+phoneNumber).on('child_added', (datasnapshot)=>{
        if(datasnapshot.val().eventid === that.eventid && datasnapshot.val().userid === phoneNumber){
          that.willflag = datasnapshot.val().willflag;
        }
      });
      firebase.database().ref('eventWilling').orderByChild('eventid').equalTo(this.eventid).on('child_added', (datasnapshot)=>{
        if(datasnapshot.val().willflag === 1){
          that.goingCount += 1;
        }
      });
    }
  }

  showGoingPeople(){
    this.usersGng = [];
    firebase.database().ref('eventWilling').orderByChild('eventid').equalTo(this.eventid).on('child_added', (datasnapshot)=>{
      if(datasnapshot.val().willflag == 1 && datasnapshot.val().userid !== ''){
        firebase.database().ref('userDetails').orderByChild('mobileNo').equalTo(datasnapshot.val().userid).on('child_added', (snapshot)=>{
          let name = snapshot.val().firstName + ' '+ snapshot.val().lastName;
          if(snapshot.val().profile_pic != undefined && snapshot.val().profile_pic != '') {
            this.usersGng.push({'name':name, 'pro_img':snapshot.val().profile_pic});
          }else{
            this.usersGng.push({'name':name, 'pro_img':'assets/imgs/pro_pic_placeholder.png'})
          }
        });
      }
    });
    this.navCtrl.push("ShowGoingUsersPage", {
      data: this.usersGng,
      header:'Users'
    });
  }

  actionBtn(typ) {
    if(typ === 'speakers')
      this.navCtrl.push("SpeakersPage", {'eventData':this.eventData});
    else if(typ === 'agenda')
      this.navCtrl.push("AgendaPage", {'eventData':this.eventData});
    else if(typ === 'quiz')
      this.navCtrl.push("QuizPage", {'eventData':this.eventData});
  }

  willingBtn(will) {
    let phoneNumber = window.localStorage.getItem('phoneNo').replace("\"", "").replace("\"", "");
    let that = this;
    let eventid = this.eventData['eventid'];
    if(will === 'going'){
      if(that.willflag === 2){
        firebase.auth().onAuthStateChanged((user)=>{
          if(user){
            let going  = {'eventid':eventid, 'userid': phoneNumber, 'willflag':1, 'willIndex':eventid+'#'+phoneNumber};
            firebase.database().ref('eventWilling').push(going).then((res)=>{
              this.willflag === 2? this.goingCount += 1:'';
                this.willflag = 1;
                let tctrl = that.toastCtrl.create({
                  message:'Your are going to event...',
                  duration: 2000,
                });
                tctrl.present();
            });
          }
        });
      }else{
        firebase.auth().onAuthStateChanged((user)=>{
          if(user){
            firebase.database().ref('eventWilling').orderByChild('willIndex').equalTo(eventid+'#'+phoneNumber).on('child_added', (datasnap)=>{
              firebase.database().ref('eventWilling').child(datasnap.key).update({'willflag':1})
              if(that.willflag != 1) {
                this.goingCount += 1;
              }
              that.willflag = 1;
            });
          }
        })
      }
    }else if(will === 'not going'){
      if(that.willflag === 2){
        firebase.auth().onAuthStateChanged((user)=>{
          if(user){
            let notgoing  = {'eventid':eventid, 'userid': phoneNumber, 'willflag':-1, 'willIndex':eventid+'#'+phoneNumber};
            firebase.database().ref('eventWilling').push(notgoing).then((res)=>{
              that.willflag = -1;
              let tctrl = that.toastCtrl.create({
                message:'Your are not going to event...',
                duration: 2000,
              });
              tctrl.present();
            });
          }
        });
      }else{
        firebase.auth().onAuthStateChanged((user)=>{
          if(user){
            firebase.database().ref('eventWilling').orderByChild('willIndex').equalTo(eventid+'#'+phoneNumber).on('child_added', (datasnap)=>{
              firebase.database().ref('eventWilling').child(datasnap.key).update({'willflag':-1}).then((res)=>{
                if(that.willflag != -1 && that.willflag != 0){
                  this.goingCount -= 1;
                }
                that.willflag = -1;
              });
            });
          }
        });
      }
    }else if(will === 'may be'){
      if(that.willflag === 2){
        firebase.auth().onAuthStateChanged((user)=>{
          if(user){
            let maybe  = {'eventid':eventid, 'userid': phoneNumber, 'willflag':0, 'willIndex':eventid+'#'+phoneNumber};
            firebase.database().ref('eventWilling').push(maybe).then((res)=>{
              that.willflag = 0;
              let tctrl = that.toastCtrl.create({
                message:'You may go...',
                duration: 2000,
              });
              tctrl.present();
            });
          }
        });
      }else{
        firebase.auth().onAuthStateChanged((user)=>{
          if(user){
            firebase.database().ref('eventWilling').orderByChild('willIndex').equalTo(eventid+'#'+phoneNumber).on('child_added', (datasnap)=>{
              firebase.database().ref('eventWilling').child(datasnap.key).update({'willflag':0}).then((res)=>{
                if(that.willflag != -1 && that.willflag != 0){
                  this.goingCount -= 1;
                }
                that.willflag = 0;
              });
            });
          }
        });
      }
    }

  }

}
