import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfilecreationPage } from './profilecreation';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ProfilecreationPage,
  ],
  imports: [
    IonicPageModule.forChild(ProfilecreationPage),
    ComponentsModule
  ],
  exports: [
    ProfilecreationPage
  ]
})
export class ProfilecreationPageModule {}
