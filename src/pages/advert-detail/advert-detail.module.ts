import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdvertDetailPage } from './advert-detail';

@NgModule({
  declarations: [
    AdvertDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(AdvertDetailPage),
  ],
})
export class AdvertDetailPageModule {}
