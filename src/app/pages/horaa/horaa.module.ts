import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HoraaPageRoutingModule } from './horaa-routing.module';

import { HoraaPage } from './horaa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HoraaPageRoutingModule
  ],
  declarations: [HoraaPage]
})
export class HoraaPageModule {}
