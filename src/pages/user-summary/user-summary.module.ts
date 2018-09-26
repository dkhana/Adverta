import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserSummaryPage } from './user-summary';

@NgModule({
  declarations: [
    UserSummaryPage,
  ],
  imports: [
    IonicPageModule.forChild(UserSummaryPage),
  ],
})
export class UserSummaryPageModule {}
