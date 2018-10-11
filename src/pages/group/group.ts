import { Component} from '@angular/core';
import {IonicPage, NavController, NavParams, LoadingController, ToastController} from 'ionic-angular';
import * as firebase from 'firebase';

@IonicPage({
  'name': 'GroupPage'
})
@Component({
  selector: 'page-group',
  templateUrl:'group.html'
})
export class GroupPage {

  lctr;
  user = firebase.auth().currentUser;
  userGroupIds:Array<string> = [];
  userGroupsData:Array<Object> = [];
  isGroupsEmpty:boolean = false;
  phoneNumber = window.localStorage.getItem('phoneNo').replace("\"", "").replace("\"", "");

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadCtrl: LoadingController, public toastCtrl: ToastController){
    this.lctr = this.loadCtrl.create({
      content:'Please Wait...'
    });
    this.lctr.present();

  }

  ionViewDidLoad() {
    this.userGroupIds = [];
    this.userGroupsData = [];
    this.getUserGroupData((result)=>{
      if(result != undefined && result.length != 0) {
        this.userGroupsData = result;
      }else{
        this.isGroupsEmpty = true;
        this.lctr.dismiss();
      }
    });
  }

  async getUserGroupData(callback) {
    let groupsData:Array<Object> = [];
    if(this.user) {
      await firebase.database().ref('userDetails').orderByChild('mobileNo').equalTo(this.phoneNumber).on('child_added', (datasnapshot)=>{
        if(datasnapshot.val().group_id != undefined && datasnapshot.val().group_id !== '') {
          let gids = datasnapshot.val().group_id;
          this.getExtraGroups_Filter(gids, callback);
        }else {
          callback([]);
        }
      });
    }else{
      this.lctr.dismiss();
      let tctrl = this.toastCtrl.create({
        message:"Your are not logged in.",
        duration:3000
      });
      tctrl.present();
    }
  }

  getExtraGroups_Filter(userGroupids, callback){
    let  total_groups: Array<Object> = [];
    let total_g_ids: Array<String> = [];
    let final_sorted_groups:Array<Object> = [];

    firebase.database().ref('groups').once('value', (datasnapshot)=>{
      datasnapshot.forEach((childsnapshot)=>{
        let g_obj = childsnapshot.val();
        total_g_ids.push(childsnapshot.key);
        g_obj['id'] = childsnapshot.key;
        total_groups.push(g_obj);
      });
      for(let j = 0; j<total_g_ids.length; j++) {
        let index = total_g_ids.indexOf(userGroupids[j]);
        if(index != -1){
          total_groups[index]['joined'] = true;
          if(total_groups[index]['is_active'] != false){
            final_sorted_groups.push(total_groups[index]);
            console.log(total_groups[index]);
          }
        }
      }
      for(let i = 0; i< total_groups.length; i++) {
        if(total_groups[i]['joined'] == undefined) {
          total_groups[i]['joined'] = false;
          if(total_groups[i]['is_active'] != false){
            final_sorted_groups.push(total_groups[i]);
            console.log(total_groups[i]);
          }
        }
      }
      this.lctr.dismiss();
      callback(final_sorted_groups);
    });
  }

  doRefresh(event){
    this.userGroupIds = [];
    this.userGroupsData = [];
    this.getUserGroupData((result)=>{
      if(result != undefined && result.length != 0){
        this.userGroupsData = result;
      }
    });
    setTimeout(()=>{ event.complete();}, 1000);
  }

  openGroup(index) {
    let group:Object = this.userGroupsData[index];
    if(group['joined']) {
      this.navCtrl.push("DetailViewPage", {'data':group});
    }else {
      let tCtrl = this.toastCtrl.create({
        'message': "You're not a member in this group.",
        'duration': 5000
      });
      tCtrl.present();
    }
  }

  joinGroup(index) {
    console.log(this.phoneNumber);
    let group:Object = this.userGroupsData[index];
    firebase.database().ref('userDetails').orderByChild('mobileNo').equalTo(this.phoneNumber).once('value', (datasnapshot)=>{
      datasnapshot.forEach((userObject)=>{
        let u_obj = userObject.val();
        if(u_obj.hasOwnProperty('group_id')){
          u_obj['group_id'].push(group['id']);
          console.log(u_obj);
          firebase.database().ref('userDetails/'+userObject.key).set(u_obj).then((_)=>{
            this.userGroupsData[index]['joined'] = true;
            let tctrl = this.toastCtrl.create({
              message: 'You have joined the group.',
              duration: 3000,
            });
            tctrl.present();
          });
        }
      });
    });
  }
  
}