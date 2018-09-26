import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdvertSortingPage } from './advert-sorting';

@NgModule({
  declarations: [
    AdvertSortingPage,
  ],
  imports: [
    IonicPageModule.forChild(AdvertSortingPage),
  ],
})
export class AdvertSortingPageModule {}
