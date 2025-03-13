import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  
  {
    path : 'post',
    loadChildren: () => import('./post/post.module').then(m => m.PostPageModule)

  },
  {

    path: 'crearpost',
    loadChildren: () => import('./formpost/formpost.module').then(m=>m.formpost)

  },

  {
    path: '',
    redirectTo: 'post',
    pathMatch: 'full'
  },
  {
    path: 'popular',
    loadChildren: () => import('./popular/popular.module').then( m => m.PopularPageModule)
  },
  {
    path: 'registrar',
    loadChildren: () => import('./registrar/registrar.module').then( m => m.RegistrarPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'detalle/:id',
    loadChildren: () => import('./post-modal/post-modal.module').then( m => m.PostPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
