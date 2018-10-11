import { Component, ViewChild, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Slides, ToastController } from 'ionic-angular';
import * as firebase from 'firebase';
import { ShowGoingUsersPage } from '../show-going-users/show-going-users';
import { Network } from '@ionic-native/network';

/**
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  'name': 'NewsPage'
})
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',

  
})
export class NewsPage {

  @ViewChild('slides') slides : Slides;
  newsData:any = [];
  newsIds = [];
  likesData = [];
  loadCtrl;
  likeBtn:Number = 0;
  cmtBtn:Number = 0;
  isEmpty:boolean = false;
  likeMapping = {'=1':'Like', 'other':'Likes'};
  user = firebase.auth().currentUser;
  newsIcon: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public toastCtrl: ToastController, private detectChanges: ChangeDetectorRef, private netCtrl: Network) {
    this.loadCtrl = this.loadingCtrl.create({
      content:'Please Wait...'
    });
    this.loadCtrl.present();
  }

  ionViewDidLoad() {
    this.newsIcon = '1';
    console.log('ionViewDidLoad NewsPage');
  }
  
  ionViewWillEnter(){

    this.netCtrl.onchange().subscribe(()=>{
      if(this.netCtrl.type == 'none'){
        try{
          this.loadCtrl.dismiss();
        }catch(error){
        }
        const tCtrl = this.toastCtrl.create({
          message: 'No Connection.',
          duration:3000,
          cssClass:'t-style'
        });
        tCtrl.present();
      }
    });
    setTimeout(() => {
      this.Getdata((result)=>{
        try{
          this.loadCtrl.dismiss();
        }catch(error){
        }
        if(result.length == 0) {
          this.isEmpty = true;
        }else{
          this.newsData = result;
        }
      });
    }, 1000);
  }

  Getdata(callback){
    let data = [];
    let phoneNumber = window.localStorage.getItem('phoneNo').replace("\"", "").replace("\"", "");
    firebase.database().ref('news').on('child_added', function(childSnapshot) {
      if(childSnapshot.val().is_active){
        let likeBtn = 0;
        let like_users = childSnapshot.val().like_users;
        if(like_users != undefined){
          for(let i = 0; i<like_users.length; i++){
            if(like_users[i] === phoneNumber){
              likeBtn = 1;
            }
          }
        }
      
        data.unshift({
          'newsid':childSnapshot.key,
          'title': childSnapshot.val().title,
          'description': childSnapshot.val().min_desc,
          'date': new Date(childSnapshot.val().news_date).toDateString(),
          'source':childSnapshot.val().source,
          'hyper_link':childSnapshot.val().hyper_link,
          'images_links': childSnapshot.val().images_links,
          'video_link':childSnapshot.val().video_link,
          'likes_count':childSnapshot.val().likes_count,
          'likeBtn':likeBtn
        });
      }
      callback(data);
    });
  }

  doRefresh(refresher){
    this.Getdata((result)=>{
      if(result.length == 0) {
        this.isEmpty = true;
      }else{
        this.newsData = result;
      }
    });
    setTimeout(() =>{refresher.complete();}, 1000);
  }

  showLikedUsers(index) {
    let usernames = [];
    let newsid = this.newsData[index]['newsid'];
    let user_phones;
    new Promise((resloved, rejected)=>{
      try{
        firebase.database().ref('news').orderByKey().equalTo(newsid).on('child_added', (datasnapshot)=>{
          let user_phones_data = datasnapshot.val().like_users;
          resloved(user_phones_data);
        });
      }catch(error){
        rejected(error);
      }
    }).then((res)=>{
      user_phones = res;
      for(let u_phone of user_phones) {
        if(u_phone != undefined && u_phone != '') {
          firebase.database().ref('userDetails').orderByChild('mobileNo').equalTo(u_phone).on('child_added', (datasnapshot)=>{
            let name  = datasnapshot.val().firstName+' '+ datasnapshot.val().lastName;
            if(datasnapshot.val().profile_pic != undefined && datasnapshot.val().profile_pic != ''){
              usernames.push({'name':name, 'pro_img':datasnapshot.val().profile_pic});
            }else{
              usernames.push({'name':name, 'pro_img':'assets/imgs/pro_pic_placeholder.png'});
            }
          });
        }
      }
      this.navCtrl.push("ShowGoingUsersPage", {'header':'Users', 'data':usernames});
    }).catch((e)=>{
      let tctrl = this.toastCtrl.create({
        message: e,
        duration: 2000
      });
      tctrl.present();
    });   
  }

  actionBtn(typ, index){
    let that = this;
    let phoneNumber = window.localStorage.getItem('phoneNo').replace("\"", "").replace("\"", "");
    let newsId = this.newsData[index]['newsid'];
    if(that.user) {
      if(typ === 'like'){
        if(that.newsData[index].likeBtn === 0) {
          if(that.user){
           if(true){
            firebase.database().ref('news').orderByKey().equalTo(newsId).on('child_added', (datasnapshot)=>{
              let newsObj = datasnapshot.val();
              newsObj.likes_count +=1;
              newsObj.like_users.push(phoneNumber);
              that.newsData[index].likeBtn = 1;
              that.newsData[index].likes_count += 1;
              firebase.database().ref('news').child(newsId).set(newsObj).then((res)=>{
                console.log('Successfully liked!!');
              }, (err)=>{
                console.log('Something Went...');
              });
            });
           }
          }
        }else{
          if(that.user){
            firebase.database().ref('news').orderByKey().equalTo(newsId).on('child_added', (datasnapshot)=>{
              let newsObj = datasnapshot.val();
              newsObj.likes_count -=1;
              newsObj.like_users.splice(newsObj.like_users.indexOf(phoneNumber), 1);
              that.newsData[index].likeBtn = 0;
              that.newsData[index].likes_count -= 1;
              firebase.database().ref('news').child(newsId).set(newsObj).then((res)=>{
                console.log('Successfully unliked!!');
              }, (err)=>{
                console.log('Something Went...');
              });
            });
          }
        }
      }
    }
  }

}