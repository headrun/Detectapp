import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import * as firebase from 'firebase';
/**
 * Generated class for the PostdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  'name': 'PostdetailPage'
})
@Component({
  selector: 'page-postdetail',
  templateUrl: 'postdetail.html',
})
export class PostdetailPage{
  postData:object = {};
  groupData:object = {};
  commentsData:Array<object> = [];
  user = firebase.auth().currentUser;
  phoneNumber = window.localStorage.getItem('phoneNo').replace("\"", "").replace("\"", "");
  postid:string = '';
  groupid:string = '';
  cmtid:string = '';
  index: number;
  navToComment: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
    this.postData = this.navParams.get('postData');
    this.postid = this.postData['postid'];
    this.groupData = this.navParams.get('groupData');
    this.groupid = this.groupData['id'];
    this.index = this.navParams.get('index');
    this.navToComment = this.navParams.get('comment');
    this.getCommentsData(this.groupid, this.postid, (result)=>{
      this.commentsData = result;
      console.log(this.commentsData);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostdetailPage');
  }

  getCommentsData(groupid, postid, callback){
    let phoneNumber = window.localStorage.getItem('phoneNo').replace("\"", "").replace("\"", "");
    let comments_data = [];
    let fullname;
    if(groupid != undefined && postid != undefined)
    firebase.database().ref(groupid+'_replies').orderByChild('parent_id').equalTo(postid).on('child_added', (datasnapshot)=>{
      if(!datasnapshot.val().is_abuse){
        let isFound = false;
        let obj = {};
        let u_phone = datasnapshot.val().commented_by;
        let like_users = datasnapshot.val().like_users;
        let likes_count = datasnapshot.val().likes_count;
        obj['likes_count'] = likes_count;
        if(like_users != undefined && like_users.length !== 0){
          for(let u of like_users) {
            if(u === phoneNumber){
              obj['cmtlike'] = 1;
              isFound = true;
              break;
            }
          }
        }
        if(!isFound) {
          obj['cmtlike'] = 0;
        }
        let comment_text = datasnapshot.val().commented_text;
        firebase.database().ref('userDetails').orderByChild('mobileNo').equalTo(u_phone).on('child_added', (childsnapshot)=>{
          fullname = childsnapshot.val().firstName + ' '+childsnapshot.val().lastName;
          if(childsnapshot.val().profile_pic != undefined && childsnapshot.val().profile_pic != ''){
            obj['pro_img'] = childsnapshot.val().profile_pic;
          }else{
            obj['pro_img'] = 'assets/imgs/pro_pic_placeholder.png'
          }
        });
        obj['comment_text'] = comment_text;
        obj['name'] = fullname;
        obj['cmtkey'] = datasnapshot.key;
        
        comments_data.push(obj);
      }
    });
    callback(comments_data);
  }

  addCmt() {
    if(this.postData['cmt_text'] == undefined || this.postData['cmt_text'] == ''){
      return;
    }
    let postid = this.postid
    let groupid = this.groupid;
    let user_phone = this.phoneNumber;
    let created_at = new Date().getTime();
    let cmt_text = this.postData['cmt_text'];
    this.postData['cmt_text'] = '';
    let comment = {'commented_by':user_phone, 'commented_text':cmt_text, 'created_at':created_at, 'modified_at': created_at, 'parent_id':postid, 'like_users':[''], 'likes_count':0, 'is_abuse':false};
    firebase.database().ref(groupid+'_replies').push(comment).then((res)=>{
      let cmt_count = this.postData['comments_count'];
      cmt_count += 1;
      this.postData['comments_count'] = cmt_count;
      firebase.database().ref(groupid+'_posts').child(postid).update({'comments_count':cmt_count}).then((res)=>{
        console.log(res);
      });
      let lctrl = this.toastCtrl.create({
        message:'Commented Successfully.',
        duration:2000,
      });
      lctrl.present();
    }, (err)=>{
      let lctrl = this.toastCtrl.create({
        message:'Please check the newtwork connection.',
        duration:2000,
      });
      lctrl.present();
      console.log('Comment not saved');
    });
  }

  actionBtn(typ, index?:number) {
    let groupid = this.groupid;
    let postData = this.postData;
    let postid = postData['postid'];
    let user_phone = this.phoneNumber;
    if(typ === 'like'){
      let flag = this.overrideIfExist(groupid, user_phone, postid);
      if(!flag){
        if(this.user) {
          firebase.database().ref(groupid+'_posts').orderByKey().equalTo(postid).on('child_added', (datasnapshot)=>{
            let obj = datasnapshot.val();
            obj.like_users.push(user_phone);
            obj.likes_count += 1;
            this.postData['postlike'] = 1;
            this.postData['likes_count'] += 1;
            firebase.database().ref(groupid+'_posts').child(postid).set(obj).then((res)=>{
              console.log('successfully liked!!!');
            }, (err)=>{
              console.log('caught the theif...');
            });;
          });
        }
      }
    }else if(typ === 'abuse'){
      if(this.user){
        firebase.database().ref(groupid+'_posts').orderByKey().equalTo(postid).on('child_added', (datasnapshot)=>{
          let postObj = datasnapshot.val();
          if(!postObj.is_abuse){
            postObj.is_abuse = true;
          }
          console.log(postObj);
          firebase.database().ref(groupid+'_posts').child(postid).set(postObj).then((res)=>{
            console.log('post abused');
            localStorage.setItem('index', this.index.toString());
            this.navCtrl.pop();
          }, (err)=>{
            console.log('Something went wrong!');
          });
        });
      }
    }else if(typ === 'cmtlike'){
      let cmtkey = this.commentsData[index]['cmtkey'];
      if(this.user){
        let cmtlike = this.commentsData[index]['cmtlike'];
        firebase.database().ref(groupid+'_replies').orderByKey().equalTo(cmtkey).on('child_added', (datasnapshot)=>{
          let cmtData = datasnapshot.val();
          if(!cmtlike){
            this.commentsData[index]['cmtlike'] = 1;
            cmtData['likes_count'] += 1;
            cmtData['like_users'].push(this.phoneNumber);
            firebase.database().ref(groupid+'_replies').child(cmtkey).set(cmtData).then((res)=>{
              console.log('successfully liked');
            }, (err)=>{
              console.log('something went wrong!');
            });
          }else{
            this.commentsData[index]['cmtlike'] = 0;
            cmtData['likes_count'] -= 1;
            cmtData['like_users'].splice(cmtData['like_users'].indexOf(this.phoneNumber), 1);
            firebase.database().ref(groupid+'_replies').child(cmtkey).set(cmtData).then((res)=>{
              console.log('unliked successfully!');
            }, (err)=>{
              console.log('something went wrong');
            });
          }
        });
      }
    }else if(typ === 'cmtabuse'){
      if(this.user){
        let cmtkey = this.commentsData[index]['cmtkey'];
        firebase.database().ref(groupid+'_replies').orderByKey().equalTo(cmtkey).on('child_added', (datasnapshot)=>{
          let cmtData = datasnapshot.val();
          cmtData.is_abuse = true;
          this.commentsData.splice(this.commentsData.indexOf(this.commentsData[index]), 1);
          firebase.database().ref(groupid+'_replies').child(cmtkey).set(cmtData).then((res)=>{
            console.log('comment abused');
          }, (err)=>{
            console.log('something went wrong!');
          });
        });
      }
    }
  }

  overrideIfExist(groupid, user_phone, postid) {
    let gid = groupid;
    let u_phone = user_phone;
    let pid = postid;
    let flag = false;
    firebase.database().ref(gid+'_posts').orderByKey().equalTo(pid).on('child_added', (datasnapshot) =>{
      let obj = datasnapshot.val();
      let likes_data = obj.like_users;

      for(let phone of likes_data) {
        if(phone === u_phone){
          likes_data.splice(likes_data.indexOf(u_phone), 1);
          obj['likes_users'] = likes_data;
          obj['likes_count'] = obj.likes_count - 1;
          this.postData['postlike'] = 0;
          this.postData['likes_count'] -= 1;
          firebase.database().ref(groupid+'_posts').child(postid).set(obj).then((res)=>{
            console.log('successfully updated!!!');
          }, (err)=>{
            console.log('caught the theif...');
          });
          flag = true;
          return flag;
        }
      }
    });
    return flag;
  }
}
