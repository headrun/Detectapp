import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import * as firebase from 'firebase';
/**
 * Generated class for the EventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  'name': 'EventsPage'
})
@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
})
export class EventsPage {

  eventsData: Array<Object> = [];
  loading;
  isEventsEmpty:boolean  = false;
  WEEK_DAYS:Array<string> = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
  MONTH_NAMES:Array<string> = ['JANUARY', 'FEBRURAY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'];

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadCtrl: LoadingController) {
    this.loading = this.loadCtrl.create({
      content: 'Please Wait...'
    });
    this.loading.present();
  }

  ionViewDidLoad() {
    setTimeout(() => {
      this.getEventData((result)=>{
        if(result.length == 0){
          this.isEventsEmpty = true;
          this.loading.dismiss();
        }else{
          this.eventsData = result;
          this.loading.dismiss();
        }
      });
    }, 1000);
    console.log('ionViewDidLoad EventsPage');
  }

  ionViewWillEnter(){
    
    setTimeout(() => {
      this.getEventData((result)=>{
        if(result.length == 0){
          this.isEventsEmpty = true;
          this.loading.dismiss();
        }else{
          this.eventsData = result;
          this.loading.dismiss();
        }
      });
    }, 1000);
  }

  showEventInDetail(index){
    let eves = this.eventsData[index];
    this.navCtrl.push("EventCreationPage", {'eventData': eves});
  }
  getEventData(callback) {
    let that = this;
    this.eventsData = [];
    let eventsData = this.eventsData;
    firebase.database().ref('eventDetails').orderByChild('is_active').equalTo(true).on('value', function(snapshot){
      snapshot.forEach(function(datasnapshot) {
        let event = datasnapshot.val();
        event['eventid'] = datasnapshot.key;
        event['month'] = that.MONTH_NAMES[new Date(event.startDate).getMonth()];
        event['date'] = new Date(event.startDate).getDate();
        event['day'] = that.WEEK_DAYS[new Date(event.startDate).getDay()];
        eventsData.unshift(event);
      })
    });
    callback(eventsData);
    setTimeout(()=>{
      this.loading.dismiss();
    }, 1000);
  }

  doRefresh(refresher) {
    this.getEventData((result)=>{
      if(result.length == 0){
        this.isEventsEmpty = true;
      }else{
        this.eventsData = result;
      }
    });
    setTimeout(()=>{ refresher.complete();}, 1000);
  }
}
