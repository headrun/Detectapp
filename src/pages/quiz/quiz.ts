import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Slide } from 'ionic-angular';
import * as firebase from 'firebase';
import { Slides } from 'ionic-angular';

/**
 * Generated class for the QuizPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  'name': 'QuizPage'
})
@Component({
  selector: 'page-quiz',
  templateUrl: 'quiz.html',
})
export class QuizPage {

  @ViewChild('slides') slides: Slides;

  lctrl;
  quizData:Array<Object> = [];
  eventData:Object = {};
  user = firebase.auth().currentUser;
  questions = [];
  answersData = [];
  anscor = [];
  slideqt:boolean = false;
  noquest:number = 0;
  complete:boolean = false;
  correctCount:number = 0;
  quizCmplt:boolean  = false;
  totalqns: number = 0;
  quizAnsFound:boolean = false;
  isQuizEmpty = false;
  terms_conditions = false;
  phoneNumber = window.localStorage.getItem('phoneNo').replace("\"", "").replace("\"", "");
  constructor(public navCtrl: NavController, public navParams: NavParams, public loadCtrl: LoadingController) {
    this.eventData = this.navParams.get('eventData');
    this.lctrl = this.loadCtrl.create({
      content:'Please Wait...'
    });
    this.lctrl.present(); 
  }

  ionViewDidLoad() {

    this.getQuizAnswersIfExist((result) =>{
      if(result) {
        this.quizCmplt = true;
        this.lctrl.dismiss();
      }else{
        this.getQuizData();
        setTimeout(() => {
          if(this.slides != undefined){
            this.slides.lockSwipeToNext(true);
            this.slides.lockSwipeToPrev(true);
          }
        }, 1000);
      }
    });
    
  }

  async getQuizData() {
    let that = this;
    let eventid = that.eventData['eventid'];
    let quizFound = false;
    await firebase.database().ref('quiz').orderByChild('event_id').equalTo(eventid).on('child_added', function(datasnapshot){
      if(datasnapshot.val().questions_data.length != 0){
        that.isQuizEmpty = true;
        that.quizData = datasnapshot.val().questions_data;
        that.noquest = that.quizData.length-1;
      }
    });
    
    setTimeout(()=>{
      this.lctrl.dismiss();
    }, 1000);
  }

  questionsbt() {
    if(this.slideqt && !this.complete){
      this.slides.lockSwipeToNext(false);
      this.slides.slideNext();
      this.slides.lockSwipeToNext(true);
      this.slideqt = false;
    }else if(this.complete){
      this.slides.lockSwipeToNext(false);
      this.slides.slideNext();
      this.slides.lockSwipeToNext(true);
      this.slideqt = false;
      this.quizCmplt = true;
      let finalObj = {'answers':this.answersData, 'userid':this.phoneNumber, 'eventid':this.eventData['eventid'], 'answerindex':this.eventData['eventid']+'#'+ this.phoneNumber, 'correctCount':this.correctCount, 'totalquestions':this.quizData.length};

      firebase.database().ref('quizAnswers').push(finalObj).then((res)=>{
        console.log('Answers successfully submited...');
      }, (err)=>{
        console.log('Something went wrong...');
      });
      this.getLeaderBoard();
    }
  }

  answered(answer, index):void {
    this.correctCount = 0;
    if(this.noquest === index) {
      this.complete = true;
    }

    let ans = this.quizData[index]['answer'];
    let qus = this.quizData[index]['question']
    if(ans.toLowerCase() === answer.toLowerCase()) {
      this.anscor[index] = 1;
      let obj = {'question':qus, 'answer':answer};
      this.answersData[index] = obj;
    }else{
      let obj = {'question':qus, 'answer':answer}
    }
    this.slideqt = true;
    for(let i = 0; i<this.anscor.length; i++){
      if(this.anscor[i]==1)
        this.correctCount +=1;
    }

  }

  getQuizAnswersIfExist(callback) {
    let eventid = this.eventData['eventid'];
    let user_phone = this.phoneNumber;
    if(this.user) {
      firebase.database().ref('quizAnswers').orderByChild('answerindex').equalTo(eventid+'#'+user_phone).on('child_added', (datasnapshot)=>{
        if(datasnapshot.val().correctCount !== '') {
          this.correctCount = datasnapshot.val().correctCount;
          this.totalqns = datasnapshot.val().totalquestions;
          callback(this.quizAnsFound = true);
        }
      });
      callback(this.quizAnsFound= false);
    }
  }

  async getLeaderBoard() {
    await firebase.database().ref('quizAnswers').once('value', (datasnapshot)=>{
      datasnapshot.forEach((chilsnaphot)=>{
        
      });
    });
  }

  acceptConditions() {
    this.terms_conditions = true;
  }
}
