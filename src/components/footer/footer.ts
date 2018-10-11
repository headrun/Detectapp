import { Component, Input } from "@angular/core";
import { NavController } from "ionic-angular";
/**
 * Generated class for the MyTextComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: "footer",
  templateUrl: "footer.html"
})
export class FooterComponent {
  text: string;
  @Input()
  ic_active: number;
  constructor(public navCtrl: NavController) {
    this.ic_active = 1;
  }
  tabCheck(pagenumber) {
    switch (pagenumber) {
      case 1: {
        this.navCtrl.push("NewsPage");
        break;
      }
      case 2: {
        this.navCtrl.push("EventsPage");
        break;
      }
      case 3: {
        this.navCtrl.push("GroupPage");
        break;
      }
      case 5: {
        this.navCtrl.push("ProfilecreationPage");
        break;
      }
    }
  }
}