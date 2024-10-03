import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FichaAnimalesPage } from './ficha-animales.page';

const routes: Routes = [
  {
    path: '',
    component: FichaAnimalesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FichaAnimalesPageRoutingModule {}
