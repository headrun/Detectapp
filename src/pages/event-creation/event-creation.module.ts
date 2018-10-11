import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventCreationPage } from './event-creation';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    EventCreationPage,
  ],
  imports: [
    IonicPageModule.forChild(EventCreationPage),
    ComponentsModule
  ],
  exports: [
   EventCreationPage 
  ]
})
export class EventCreationPageModule {}
