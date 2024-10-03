import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnimalePageRoutingModule } from './animale-routing.module';

import { AnimalePage } from './animale.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnimalePageRoutingModule
  ],
  declarations: [AnimalePage]
})
export class AnimalePageModule {}
