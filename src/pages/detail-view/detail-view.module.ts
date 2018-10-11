import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailViewPage } from './detail-view';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    DetailViewPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailViewPage),
    ComponentsModule
  ],
  exports: [
    DetailViewPage
  ]
})
export class DetailViewPageModule {}
