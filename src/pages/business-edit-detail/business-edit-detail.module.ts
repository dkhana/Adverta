import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BusinessEditDetailPage } from './business-edit-detail';

@NgModule({
  declarations: [
    BusinessEditDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(BusinessEditDetailPage),
  ],
})
export class BusinessEditDetailPageModule {}
