import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, ModalController } from 'ionic-angular';
import * as firebase from 'firebase';
import { NewpostPage } from '../newpost/newpost';
/**
 * Generated class for the DetailViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  'name': 'DetailViewPage'
})
@Component({
  selector: 'page-detail-view',
  templateUrl: 'detail-view.html',
})
export class DetailViewPage {
  
  pageData:object = {};
  pageRenderData:Array<object> = []; 
  user = firebase.auth().currentUser;
  lctrl;
  newpost;
  imgfiles;
  totalPosts: number;
  index;
  phoneNumber = window.localStorage.getItem('phoneNo').replace("\"", "").replace("\"", "");
  constructor(public navCtrl: NavController, public navParams: NavParams, public loadCtrl: LoadingController, public toastCtrl: ToastController, public modalCtrl: ModalController) {
    this.index = localStorage.getItem('index');
    localStorage.removeItem('index');
    this.pageData = navParams.get('data');
  }

  ionViewDidLoad() {
    this.lctrl = this.loadCtrl.create({
      content:'Please Wait...'
    });
    this.lctrl.present();
  }

  ionViewWillEnter(){
    this.getGroupPosts((renderResult)=>{
      this.pageRenderData = renderResult;
      if(this.index){
        this.pageRenderData.splice(this.index, 1);
        localStorage.removeItem('index');
      }
      this.totalPosts = this.pageRenderData.length;
      this.lctrl.dismiss();
    });
  }

  doRefresh(event){
    this.getGroupPosts((renderResult)=>{
      this.pageRenderData = renderResult;
      if(this.index){
        this.pageRenderData.splice(this.index, 1);
      }
      this.totalPosts = this.pageRenderData.length;
      setTimeout(()=>{ event.complete()}, 1000);
    });
  }

  getGroupPosts(callback) {
    let renderData:Array<object> = [];
    let groupid = this.pageData['id'];
    let like:number = 0;
    firebase.database().ref(groupid+'_posts').on("child_added", (snapshot)=>{
      if(!snapshot.val().is_abuse && (snapshot.val().post != '' || snapshot.val().post_image)){
        let postobj = snapshot.val();
        postobj['created_at'] = new Date(postobj.created_at).toDateString();
        postobj['postid'] = snapshot.key;
        for(let user_phone of  postobj.like_users){
          if(user_phone === this.phoneNumber){
            postobj['postlike'] = 1;
            like = 1;
          }
        }
        if(!like){
          postobj['postlike'] = 0;
        }
        postobj['cmt_text'] = '';
        if(snapshot.val().posted_by != undefined && snapshot.val().posted_by != ''){
          let user = snapshot.val().posted_by;
          firebase.database().ref('userDetails').orderByChild('mobileNo').equalTo(user).on('child_added', (childsnapshot)=>{
            postobj['name'] = childsnapshot.val().firstName +' '+childsnapshot.val().lastName;
            postobj['role'] = childsnapshot.val().role;
            if(postobj.role === 'Doctor'){
              postobj['spec'] = childsnapshot.val().oncopathology != ''?childsnapshot.val().oncopathology: childsnapshot.val().generalPathology;
            }
            if(childsnapshot.val().profile_pic != undefined && childsnapshot.val().profile_pic != ''){
            postobj['pro_img'] = childsnapshot.val().profile_pic;
            }else{
              postobj['pro_img'] = 'assets/imgs/pro_pic_placeholder.png';
            }
          });
        }else{
          postobj['name'] = 'Anonymous';
          postobj['role'] = 'Anonymous';
          postobj['pro_img'] = 'assets/imgs/pro_pic_placeholder.png';
        }
        renderData.unshift(postobj);
      }
    });
    callback(renderData);
  }

  actionBtn(typ, index) {
    let groupid = this.pageData['id'];
    let postData = this.pageRenderData[index];
    let postid = postData['postid'];
    let user_phone = this.phoneNumber;
    if(typ === 'like'){
      let flag = this.overrideIfExist(groupid, user_phone, postid, index);
      if(!flag){
        if(this.user) {
          firebase.database().ref(groupid+'_posts').orderByKey().equalTo(postid).on('child_added', (datasnapshot)=>{
            let obj = datasnapshot.val();
            obj.like_users.push(user_phone);
            obj.likes_count += 1;
            this.pageRenderData[index]['postlike'] = 1;
            this.pageRenderData[index]['likes_count'] += 1;
            firebase.database().ref(groupid+'_posts').child(postid).set(obj).then((res)=>{
              console.log('successfully liked!!!');
            }, (err)=>{
              console.log('caught the theif...');
            });;
          });
        }
      }
    }else if(typ === 'comment'){
      this.postView(index, true);
    }else if(typ === 'abuse'){
      firebase.database().ref(groupid+'_posts').orderByKey().equalTo(postid).on('child_added', (datasnapshot)=>{
        let postObj = datasnapshot.val();
        if(!postObj.is_abuse){
          postObj.is_abuse = true;
        }
        console.log(postObj);
        this.pageRenderData.splice(this.pageRenderData.indexOf(postData), 1);
        firebase.database().ref(groupid+'_posts').child(postid).set(postObj).then((res)=>{
          console.log('post abused');
        }, (err)=>{
          console.log('Something went wrong!');
        });
      });
    }
  }

  overrideIfExist(groupid, user_phone, postid, index) {
    let gid = groupid;
    let u_phone = user_phone;
    let pid = postid;
    let flag = false;
    firebase.database().ref(gid+'_posts').orderByKey().equalTo(pid).on('child_added', (datasnapshot) =>{
      let obj = datasnapshot.val();
      let likes_data = obj.like_users;

      for(let phone of likes_data) {
        if(phone === u_phone){
          likes_data.splice(likes_data.indexOf(phone), 1);
          obj['like_users'] = likes_data;
          obj['likes_count'] = obj.likes_count - 1;
          this.pageRenderData[index]['postlike'] = 0;
          this.pageRenderData[index]['likes_count'] -= 1;
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

  addCmt(index) {
    let postid = this.pageRenderData[index]['postid'];
    let groupid = this.pageData['id'];
    let user_phone = this.phoneNumber;
    let created_at = new Date().getTime();
    let cmt_text = this.pageRenderData[index]['cmt_text'];
    this.pageRenderData[index]['cmt_text'] = '';
    let comment = {'commented_by':user_phone, 'commented_text':cmt_text, 'created_at':created_at, 'modified_at': created_at, 'parent_id':postid, 'like_users':[''], 'likes_count':0, 'is_abuse':false};
    firebase.database().ref(groupid+'_replies').push(comment).then((res)=>{
      let lctrl = this.toastCtrl.create({
        message:'Commented Successfully.',
        duration:2000,
      });
      lctrl.present();
      console.log('Commented Succesfully');
    }, (err)=>{
      let lctrl = this.toastCtrl.create({
        message:'Please check the newtwork connection.',
        duration:2000,
      });
      lctrl.present();
      console.log('Comment not saved');
    });
  }

  getCommentsData(groupid, postid, callback){
    let comments_data = [];
    let fullname;
    firebase.database().ref(groupid+'_replies').orderByChild('parent_id').equalTo(postid).on('child_added', (datasnapshot)=>{
      if(!datasnapshot.val().is_abuse){
        let isFound = false;
        let obj = {};
        let u_phone = datasnapshot.val().commented_by;
        let like_users = datasnapshot.val().like_users;
        let likes_count = datasnapshot.val().likes_count;
        obj['likes_count'] = likes_count;
        if(like_users != undefined && like_users.length !== 0){
          for(let user_phone of like_users) {
            if(user_phone === this.phoneNumber){
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
        });
        obj['comment_text'] = comment_text;
        obj['name'] = fullname;
        obj['cmtkey'] = datasnapshot.key;
        if(datasnapshot.val().profile_pic != undefined && datasnapshot.val().profile_pic != ''){
          obj['pro_img'] = datasnapshot.val().profile_pic;
        }else{
          obj['pro_img'] = 'assets/imgs/pro_pic_placeholder.png'
        }
        comments_data.push(obj);
      }
    });
    callback(comments_data);
  }

  onFileChange(event){
    this.imgfiles = event.target.files[0];
  }

  postView(index, comment?:boolean) {
    console.log("post view");
    debugger;
    comment = false;
    let postData = this.pageRenderData[index];
    let groupData = this.pageData;
    this.navCtrl.push("PostdetailPage", {'postData':postData, 'groupData':groupData, 'index':index, 'comment':comment});
  }

  newPost(){
    this.navCtrl.push("NewpostPage", {'groupData':this.pageData});
  }

}
