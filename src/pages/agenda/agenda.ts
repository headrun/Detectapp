import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import * as firebase from 'firebase';

/**
 * Generated class for the AgendaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  'name': 'AgendaPage'
})
@Component({
  selector: 'page-agenda',
  templateUrl: 'agenda.html',
})
export class AgendaPage {
  
  eventData: Object = {};
  agendaData: Object = {};
  sessionData:Array<Object> = [];
  isSessionsEmpty:boolean = false;
  lctrl;


  constructor(public navCtrl: NavController, public navParams: NavParams, public loadCtrl: LoadingController) {
    this.eventData = this.navParams.get('eventData');
    this.lctrl = this.loadCtrl.create({
      content:'Please Wait...'
    });
    this.lctrl.present();
  }

  ionViewDidLoad() {
    this.getAgendaDetails(this.eventData, (result)=>{
      if(result != undefined && result.length != 0) {
        console.log(result);
        this.sessionData = result;
      }else{
        this.isSessionsEmpty = true;
      }
    });
    console.log('ionViewDidLoad AgendaPage');
  }

 async getAgendaDetails(event, callback) {
    let agendaData:Object = {};
    let sessionData:Array<Object> = [];
    let speakersids:Array<string> = [];
    await firebase.database().ref('agendaDetails').orderByChild('event_id').equalTo(event.eventid).on('child_added', (agendadetails)=>{
      agendaData = agendadetails.val();
      sessionData = agendadetails.val().session_data;
      if(sessionData != undefined){
        for(let i = 0; i<sessionData.length; i++){
          speakersids = sessionData[i]['speaker'];
          this.getSpeakersDetails(sessionData[i], speakersids, (result)=>{
            sessionData[i] = result;
          });
        }
        this.lctrl.dismiss();
        callback(sessionData);
      }
    });
  }

  async getSpeakersDetails(sessionData, speakersids, callback){
    sessionData['speakers_list'] = [];
    if(speakersids != undefined && speakersids.length != 0){
      for(let i = 0; i<speakersids.length; i++){
        let s_firstName:string = "";
        let s_lastName:string = "";
        await firebase.database().ref('speakersDetails').orderByKey().equalTo(speakersids[i]).on('child_added', (speaker)=>{
          s_firstName = speaker.val().firstName;
          s_lastName  = speaker.val().lastName;
          let name = s_firstName+' '+s_lastName;
          sessionData['speakers_list'].push(name);
        });
      }
      callback(sessionData);
    }
  }

}
