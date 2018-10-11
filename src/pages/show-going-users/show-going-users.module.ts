import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShowGoingUsersPage } from './show-going-users';

@NgModule({
  declarations: [
    ShowGoingUsersPage,
  ],
  imports: [
    IonicPageModule.forChild(ShowGoingUsersPage),
  ],
  exports: [
    ShowGoingUsersPage
  ]
})
export class ShowGoingUsersPageModule {}
