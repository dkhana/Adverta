import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdvertInfoPage } from './advert-info';

@NgModule({
  declarations: [
    AdvertInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(AdvertInfoPage),
  ],
})
export class AdvertInfoPageModule {}
