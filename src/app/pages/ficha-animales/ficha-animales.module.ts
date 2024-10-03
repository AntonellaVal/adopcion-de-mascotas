import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FichaAnimalesPageRoutingModule } from './ficha-animales-routing.module';

import { FichaAnimalesPage } from './ficha-animales.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FichaAnimalesPageRoutingModule
  ],
  declarations: [FichaAnimalesPage]
})
export class FichaAnimalesPageModule {}
