import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  profilebutton(): void {
    this.navCtrl.push('ProfilePage');
  }

  advert1(): void {
    this.navCtrl.push('AdvertDetailPage');
  }

  advert2(): void {
    this.navCtrl.push('RemoveAdvertPage');
  }

  advert3(): void {
    this.navCtrl.push('AdvertSortingPage');
  }

  advert4(): void {
    this.navCtrl.push('UserSummaryPage');
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }

}
