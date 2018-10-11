import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import * as firebase from 'firebase';

/**
 * Generated class for the ShowGoingUsersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  'name': 'ShowGoingUsersPage'
})
@Component({
  selector: 'page-show-going-users',
  templateUrl: 'show-going-users.html',
})
export class ShowGoingUsersPage {

  data:Array<Object> = [];
  header:string;
  lctrl;
  groupid:string;
  postid: string;
  userAuth = firebase.auth().currentUser;
  constructor(public navCtrl: NavController, public navParams: NavParams, public loadCtrl: LoadingController) {
    this.lctrl = this.loadCtrl.create({
      content:'Please Wait...'
    });
    this.lctrl.present();
    this.data = navParams.get('data');
    this.header = navParams.get('header');
    this.groupid = navParams.get('groupid');
    this.postid = navParams.get('postid');
  }

  ionViewDidLoad() {

  }

  ionViewDidEnter() {
    console.log(this.data);
    if(this.data != undefined) {
      setTimeout(()=>{
        this.lctrl.dismiss();
      }, 100);
    }
  }

  actionBtn(typ, index) {
    let userid = this.userAuth.uid;
    let cmtkey = this.data[index]['cmtkey'];
    let cmtData = this.data[index];
    let groupid = this.groupid;
    let postid = this.postid;
    if(typ === 'like'){
      let flag = this.overrideIfExist(groupid,userid, postid, index, cmtkey);
      if(!flag){
        if(this.userAuth) {
          firebase.database().ref(groupid+'_replies').orderByKey().equalTo(cmtkey).on('child_added', (datasnapshot)=>{
            let obj = datasnapshot.val();
            let likes_count = obj.likes_count+1;
            this.data[index]['likes_count'] += likes_count;
            obj.like_users.push(userid);
            obj['likes_count'] = likes_count;
            this.data[index]['cmtlike'] = 1;
            firebase.database().ref(groupid+'_replies').child(cmtkey).set(obj).then((res)=>{
              console.log('successfully liked!!!');
            }, (err)=>{
              console.log('caught the theif...');
            });
          });
        }
      }
    }else if(typ === 'abuse'){
      firebase.database().ref(groupid+'_replies').orderByKey().equalTo(cmtkey).on('child_added', (datasnapshot)=>{
        let cmtObj = datasnapshot.val();
        if(!cmtObj.is_abuse) {
          cmtObj.is_abuse = true;
        }
        this.data.splice(this.data.indexOf(cmtData), 1);
        firebase.database().ref(groupid+'_replies').child(cmtkey).set(cmtObj).then((res)=>{
          console.log('comment abused');
        }, (err)=>{
          console.log('something went wrong!');
        });
      });
    }
  }

  overrideIfExist(groupid, userid, postid, index, cmtkey) {
    let gid = groupid;
    let uid = userid;
    let flag = false;
    let cmtid = cmtkey;
    firebase.database().ref(gid+'_replies').orderByKey().equalTo(cmtid).on('child_added', (datasnapshot) =>{
      debugger;
      let obj = datasnapshot.val();
      let likes_data = obj.like_users
      if(likes_data != undefined && likes_data.length != 0) {
        for(let id of likes_data) {
          if(id === uid){
            likes_data.splice(likes_data.indexOf(id), 1);
            obj['like_users'] = likes_data;
            let likes_count = datasnapshot.val().likes_count;
            likes_count -= 1;
            this.data[index]['likes_count'] = likes_count;
            obj['likes_count'] = likes_count;
            this.data[index]['cmtlike'] = 0;
            firebase.database().ref(groupid+'_replies').child(cmtid).set(obj).then((res)=>{
              console.log('successfully updated!!!');
            }, (err)=>{
              console.log('caught the theif...');
            });
            flag = true;
            return flag;
          }
        }
      }
    });
    return flag;
  }


}
