import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import * as firebase from 'firebase';

/**
 * Generated class for the SpeakersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  'name': 'SpeakersPage'
})
@Component({
  selector: 'page-speakers',
  templateUrl: 'speakers.html',
})
export class SpeakersPage{

  eventData:Object = {};
  eventId:String = '';
  speakerIds:Array<String> = [];
  speakersData:Array<Object> = [];
  isSpeakersEmpty:boolean = false;
  lctrl;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadCtrl:LoadingController) {
    this.eventData = this.navParams.get('eventData');
    this.eventId = this.eventData['eventid'];
  }

  ionViewDidLoad() {
    this.getSpeakersIds(this.eventId);
    console.log('ionViewDidLoad SpeakersPage');
  }

  ionViewWillEnter(){
  }

 async getSpeakersIds(evid){
    let that = this;
    let eventid = evid;
    await firebase.database().ref('agendaDetails').orderByChild('event_id').equalTo(eventid).on('child_added', function(datasnapshot){
      let sp = datasnapshot.val();
      if(sp.hasOwnProperty('speaker_id')) {
        if(sp.speaker_id.length > 0){
          that.speakerIds = datasnapshot.val().speaker_id;
          if(that.speakerIds.length != 0){
            that.getSpeakerDetails(that.speakerIds, (result)=>{
              if(result != undefined && result.length != 0) {
                that.speakersData = result;
              }else{
                that.isSpeakersEmpty = true;
              }
            });
          }else{
            that.isSpeakersEmpty = true;
          }
        }
      }else{
        that.isSpeakersEmpty = true;
      }
    });
  }

  async getSpeakerDetails(speakerIds, callback){
    let that = this;
    let ids = speakerIds[0];
    let speakersData=[];
    await ids.forEach(id=> {
      firebase.database().ref('speakersDetails').orderByKey().equalTo(id).on('child_added', function(datasnapshot){
        let speakerDetails = datasnapshot.val();
        speakersData.push(speakerDetails);
      });
      callback(speakersData);
    });
    
  }





}
