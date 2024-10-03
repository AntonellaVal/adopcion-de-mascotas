import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'recuperarcontra',
    loadChildren: () => import('./pages/recuperarcontra/recuperarcontra.module').then( m => m.RecuperarcontraPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'animale',
    loadChildren: () => import('./pages/animale/animale.module').then( m => m.AnimalePageModule)
  },
  {
    path: 'ficha-animales',
    loadChildren: () => import('./pages/ficha-animales/ficha-animales.module').then( m => m.FichaAnimalesPageModule)
  },
  {
    path: 'horaa',
    loadChildren: () => import('./pages/horaa/horaa.module').then( m => m.HoraaPageModule)
  },
  {
    path: 'formdaradopcion',
    loadChildren: () => import('./pages/ficha-animales/ficha-animales.module').then( m => m.FichaAnimalesPageModule)
  },
  {
    path: 'redescontacto',
    loadChildren: () => import('./pages/redescontacto/redescontacto.module').then( m => m.RedescontactoPageModule)
  }, 
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module').then( m => m.PagesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
