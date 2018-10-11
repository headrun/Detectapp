import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import * as firebase from 'firebase';

/**
 * Generated class for the NewpostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  'name': "NewpostPage"
})
@Component({
  selector: 'page-newpost',
  templateUrl: 'newpost.html',
})
export class NewpostPage {
  groupData;
  newpost;
  imgfiles;
  lctr;
  phoneNumber = window.localStorage.getItem('phoneNo').replace("\"", "").replace("\"", "");
  user = firebase.auth().currentUser;
  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public loadCtrl:LoadingController) {
    this.groupData = this.navParams.get('groupData');
    console.log(this.groupData);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewpostPage');
  }

  onFileChange(event){
    this.imgfiles = event.target.files[0];
  }
  publishNewPost(){

    let newpost = this.newpost;
    this.newpost = '';
    document.getElementById('imgfile')['value'] = '';
    let imgfile = this.imgfiles;
    this.imgfiles = '';
    let groupid = this.groupData['id'];
    if(imgfile == undefined && newpost == undefined){
      return;
    }
    if(imgfile != '' && imgfile != undefined) {
      this.lctr = this.loadCtrl.create({
        content:'Publishing New Post...'
      });
      this.lctr.present();
      this.saveNewPostImgData(imgfile, (imgUrl)=>{
        let postObj = {'comments_count':0, 'created_at': new Date().getTime(), 'is_abuse':false, 'is_active':true, 'is_pinned':0, 'like_users':[''], 'likes_count':0, 'modified_at':new Date().getTime(), 'post':newpost, 'post_image':imgUrl, 'posted_by':this.phoneNumber};
        console.log(postObj);
        firebase.database().ref(groupid+'_posts').push(postObj).then((res)=>{
          let tctrl = this.toastCtrl.create({
            message:'Posted Successfully.',
            duration:2000,
          });
          this.lctr.dismiss();
          tctrl.present();
          this.navCtrl.pop();
        }, (err)=>{
          let tctrl = this.toastCtrl.create({
            message:'Something went wrong.',
            duration:2000,
          });
          tctrl.present();
        });
      });
    }else{
      this.lctr = this.loadCtrl.create({
        content:'Publishing New Post...'
      });
      this.lctr.present();
      let postObj = {'comments_count':0, 'created_at': new Date().getTime(), 'is_abuse':false, 'is_active':true, 'is_pinned':0, 'like_users':[''], 'modified_at':new Date().getTime(), 'likes_count':0, 'post':newpost, 'post_image':'', 'posted_by':this.phoneNumber};
      firebase.database().ref(groupid+'_posts').push(postObj).then((res)=>{
        let tctrl = this.toastCtrl.create({
          message:'Posted Successfully.',
          duration:2000,
        });
        this.lctr.dismiss();
        tctrl.present();
        this.navCtrl.pop();
      }, (err)=>{
        this.lctr.dismiss();
        let lctrl = this.toastCtrl.create({
          message:'Something went wrong.',
          duration:2000,
        });
        lctrl.present();
      });
    }
  }

  saveNewPostImgData(file, callback){
    const ref = firebase.storage().ref('All_Image_Uploads');
    const name = (+new Date()) + '-' + file.name;
    const task = ref.child(name).put(file);
    file = '';
    task.on('state_changed', (snapshot)=>{
      var progress = (snapshot['bytesTransferred'] / snapshot['totalBytes']) * 100;
      if (progress === 100) {
      }
    }, (err)=>{
      console.log('image not uploaded');
    }, ()=>{
      task.snapshot.ref.getDownloadURL().then((downloadUrl)=>{
        callback(downloadUrl)
      });
    });
  }

  openFile(){
    document.getElementById('imgfile').click();
  }
}
