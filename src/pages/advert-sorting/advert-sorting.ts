import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AdvertSortingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-advert-sorting',
  templateUrl: 'advert-sorting.html',
})
export class AdvertSortingPage {

  backbutton(): void {
    this.navCtrl.push('DashboardPage');
  }

  advertinfobutton(): void {
    this.navCtrl.push('AdvertInfoPage');
  }

  items = [
    'Advert 1',
    'Advert 2',
    'Advert 3',
    
  ];

  itemSelected(item: string) {
    console.log("Selected Item", item);
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdvertSortingPage');
  }

}
