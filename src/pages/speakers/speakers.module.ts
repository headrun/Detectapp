import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SpeakersPage } from './speakers';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    SpeakersPage,
  ],
  imports: [
    IonicPageModule.forChild(SpeakersPage),
    ComponentsModule
  ],
  exports: [
    SpeakersPage
  ]
})
export class SpeakersPageModule {}
