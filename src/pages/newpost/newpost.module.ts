import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewpostPage } from './newpost';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    NewpostPage,
  ],
  imports: [
    IonicPageModule.forChild(NewpostPage),
    ComponentsModule
  ],
  exports: [
    NewpostPage
  ]
})
export class NewpostPageModule {}
