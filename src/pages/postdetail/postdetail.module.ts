import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PostdetailPage } from './postdetail';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    PostdetailPage,
  ],
  imports: [
    IonicPageModule.forChild(PostdetailPage),
    ComponentsModule
  ],
  exports: [
    PostdetailPage
  ]
})
export class PostdetailPageModule {}
