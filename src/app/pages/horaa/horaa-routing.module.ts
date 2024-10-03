import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HoraaPage } from './horaa.page';

const routes: Routes = [
  {
    path: '',
    component: HoraaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HoraaPageRoutingModule {}
