import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesPage } from './pages.page';

const routes: Routes = [
  {
    path: '',
    component: PagesPage
  },  {
    path: 'horaa',
    loadChildren: () => import('./horaa/horaa.module').then( m => m.HoraaPageModule)
  },
  {
    path: 'formdaradopcion',
    loadChildren: () => import('./formdaradopcion/formdaradopcion.module').then( m => m.FormdaradopcionPageModule)
  },
  {
    path: 'redescontacto',
    loadChildren: () => import('./redescontacto/redescontacto.module').then( m => m.RedescontactoPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesPageRoutingModule {}
