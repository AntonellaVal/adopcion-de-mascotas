import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnimalePage } from './animale.page';

const routes: Routes = [
  {
    path: '',
    component: AnimalePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimalePageRoutingModule {}
