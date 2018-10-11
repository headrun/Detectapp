import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController, AlertController, App} from 'ionic-angular';
import * as firebase from 'firebase';
import { Camera, CameraOptions } from '@ionic-native/camera';

@IonicPage({
  'name': 'ProfilecreationPage'
})
@Component({
  selector: 'page-profilecreation',
  templateUrl: 'profilecreation.html',
})
export class ProfilecreationPage {

  profiledesignation: string;
  profileemail: string;
  profilename: string;
  profileFirstName: string;
  profileLastName: string;
  phoneNumber = window.localStorage.getItem('phoneNo').replace("\"", "").replace("\"", "");
  ProfileMobNo: string;
  experience: string;
  myphoto: any;
  user = firebase.auth().currentUser;
  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public loadCtrl: LoadingController, private camera: Camera, private _app: App, private alertCtrl: AlertController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilecreationPage');
    var that = this;
    var profiledesignation = that.profiledesignation;
    var profileemail = that.profileemail;
    var profilename = that.profilename;
    var profileFirstName = that.profileFirstName;
    var profileLastName = that.profileLastName;
    var ProfileMobNo = that.ProfileMobNo;
    var experience = that.experience;
    var profile_pic = that.myphoto;

    let lctrl = this.loadCtrl.create({
      content:"Please Wait..."
    });
    lctrl.present();

       let mobileNo: string;
       let localNo: string;
       let phoneNumber = window.localStorage.getItem('phoneNo').replace("\"", "").replace("\"", "");
      //  var user = firebase.auth().currentUser;

        firebase.database().ref('userDetails').orderByChild('mobileNo').on('value', function(snapshot){
          
          snapshot.forEach(function(childsnap){
            mobileNo = childsnap.val().mobileNo.toString();
            localNo = phoneNumber;
            if(mobileNo == localNo){
              that.profiledesignation = childsnap.val().role;
              that.profileemail = childsnap.val().emailId;
              that.profilename = childsnap.val().firstName+" "+childsnap.val().lastName;
              that.profileFirstName = childsnap.val().firstName;
              that.profileLastName = childsnap.val().lastName;
              that.ProfileMobNo = childsnap.val().mobileNo;
              that.experience = childsnap.val().experience;
              if(childsnap.val().profile_pic != undefined && childsnap.val().profile_pic != ''){
                that.myphoto = childsnap.val().profile_pic;
                }else{
                  that.myphoto = 'assets/imgs/pro_pic_placeholder.png';
                }
            
            }
          });
        });
        setTimeout(()=>{
            lctrl.dismiss();
        }, 2000);

   
  }

  saveprofile(){
    let toastCtrl = this.toastCtrl;
    var profileFirstName = this.profileFirstName;
    var profileLastName = this.profileLastName;
    var experience = this.experience;
    var profileemail = this.profileemail;
    var date = new Date().getTime();
    let mobileNo: string;
    let localNo: string;
    // var user = firebase.auth().currentUser;
    let phoneNumber = window.localStorage.getItem('phoneNo').replace("\"", "").replace("\"", "");

        firebase.database().ref('userDetails').orderByChild('mobileNo').on('value', function(snapshot){
          snapshot.forEach(function(childsnap){
            localNo = phoneNumber;
            mobileNo = childsnap.val().mobileNo.toString();
            if(mobileNo == localNo){
             var finalData = {
               firstName: profileFirstName,
               lastName: profileLastName,
               emailId: profileemail,
               role: childsnap.val().role,
               specialisation: childsnap.val().specialisation,
               generalPathology: childsnap.val().generalPathology,
               oncopathology: childsnap.val().oncopathology,
               experience: experience,
               createdAt: date,
               updatedAt: date,
               deletedAt: '',
               createdBy: '',
               updatedBy: '',
               deletedBy: '',
               profile_pic: childsnap.val().profile_pic,
               userid: window.localStorage.getItem('accountId').replace("\"", "").replace("\"", ""),
              // userid: phoneNumber,
               mobileNo: childsnap.val().mobileNo,
               group_id:childsnap.val().group_id
             }
            firebase.database().ref('userDetails').child(childsnap.key).set(finalData).then(function (){
              
            });
            const toast = toastCtrl.create({
              message:'Profile Updated',
              duration: 1000,
            });
            toast.present();
            }
          });
        });
  }

  takePhoto(){

    try{
      var user = firebase.auth().currentUser;
      var profileFirstName = this.profileFirstName;
      var profileLastName = this.profileLastName;
      var experience = this.experience;
      var profileemail = this.profileemail;
      var date = new Date().getTime();
      let mobileNo: string;
      let localNo: string;
    
      const options: CameraOptions = {
      quality: 70,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
      // sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      // saveToPhotoAlbum:false
      }

      this.camera.getPicture(options).then((imagedata) => {
      this.myphoto = 'data:image/jpeg;base64,'+imagedata;
      // console.log("myphoto -----"+this.myphoto.target);
      var files = this.myphoto;
      this.uploadImage(this.myphoto);

      // const photo = 'data:image/jpeg;base64,'+imagedata;
    }, (err) =>{
      alert(err);
    });
    
    // Upload the file and metadata
  

  }catch(err){
    console.log(JSON.stringify(err));
  }

  }

  uploadImage(imageURI){
    return new Promise<any>((resolve, reject) => {
      let lctrl = this.loadCtrl.create({
        content:"Please Wait..."
      });
      lctrl.present();
      var profileFirstName = this.profileFirstName;
      var profileLastName = this.profileLastName;
      var experience = this.experience;
      var profileemail = this.profileemail;
      var date = new Date().getTime();
      let storageRef = firebase.storage().ref();
      let imageRef = storageRef.child('image').child(date+'profile');
      let mobileNo: string;
      let localNo: string;
      let photoUrl:string;
      let phoneNumber = window.localStorage.getItem('phoneNo').replace("\"", "").replace("\"", "");
      let user = firebase.auth().currentUser;
      this.encodeImageUri(imageURI, function(image64){
        imageRef.putString(image64, 'data_url')
        .then((snapshot) => {
          // console.log(snapshot.downloadURL);
          snapshot.ref.getDownloadURL().then(dwnldurl =>{
            photoUrl = dwnldurl;
        
          firebase.database().ref('userDetails').orderByChild('mobileNo').on('value', function(snapshot){
            snapshot.forEach(function(childsnap){
              mobileNo = childsnap.val().mobileNo.toString();
              // localNo = window.localStorage.getItem('phoneNo').replace("\"", "").replace("\"", "");
              localNo = phoneNumber;
              if(mobileNo == localNo){
      
               var finalData = {
                 firstName: profileFirstName,
                 lastName: profileLastName,
                 emailId: profileemail,
                 role: childsnap.val().role,
                 specialisation: childsnap.val().specialisation,
                 generalPathology: childsnap.val().generalPathology,
                 oncopathology: childsnap.val().oncopathology,
                 experience: experience,
                 createdAt: date,
                 updatedAt: date,
                 deletedAt: '',
                 createdBy: '',
                 updatedBy: '',
                 deletedBy: '',
                 profile_pic: dwnldurl,
                 userid: window.localStorage.getItem('accountId').replace("\"", "").replace("\"", ""),
                //  userid: user.uid,
                 mobileNo: childsnap.val().mobileNo,
                 group_id:childsnap.val().group_id
               }
                firebase.database().ref('userDetails').child(childsnap.key).set(finalData).then(function (){
                  lctrl.dismiss();
                });
              }else{
                lctrl.dismiss();
              }
            });
          });

        
        }, err => {
          reject(err);
        })

  });
      })
    })
  }

  encodeImageUri(imageUri, callback) {
    var c = document.createElement('canvas');
    var ctx = c.getContext("2d");
    var img = new Image();
    img.onload = function () {
      var aux:any = this;
      c.width = aux.width;
      c.height = aux.height;
      ctx.drawImage(img, 0, 0);
      var dataURL = c.toDataURL("image/jpeg");
      callback(dataURL);
    };
    img.src = imageUri;
  };


  logout(){
    var navCtrl = this.navCtrl;
    var _app = this._app;

    let alert = this.alertCtrl.create({
      title: 'Log Out',
      message: 'Are you sure you want to Log out?',
      buttons: [
          {
              text: 'No',
              handler: () => {
                  console.log('Cancel clicked');
              }
          },
          {
              text: 'Yes',
              handler: () => {
                // window.localStorage.removeItem('token');
                // _app.getRootNav().setRoot(HomePage).then((res) => {
                //       // let index = 1;
                //       navCtrl.remove(navCtrl.getPrevious().index);
                //     });
                firebase.auth().signOut().then(function() {

                  //  navCtrl.push(HomePage);
                _app.getRootNav().setRoot("HomePage").then((res) => {
                  // let index = 1;
                  navCtrl.remove(navCtrl.getPrevious().index);
                });
                 }).catch(function(error) {
                   //console.log(error)
                 })

              }
          }
      ]
  })

  alert.present();

  }
}
