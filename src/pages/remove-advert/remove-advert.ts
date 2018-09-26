import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the RemoveAdvertPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-remove-advert',
  templateUrl: 'remove-advert.html',
})
export class RemoveAdvertPage {

  backbutton(): void {
    this.navCtrl.push('DashboardPage');
  }
  
  selectedPlacement : string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public alerCtrl: AlertController) {
  }

  doConfirm() {
    let confirm = this.alerCtrl.create({
      message: 'Are you sure want to remove this advertisement?',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Remove',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RemoveAdvertPage');
  }

}
