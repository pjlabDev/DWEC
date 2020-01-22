import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'material-list', loadChildren: () => import('./material/material.module').then(m => m.MaterialModule)
  },
  {
    path: 'login-page', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'altaUsuario', loadChildren: () => import('./alta-usuario/alta-usuario.module').then(m => m.AltaUsuarioModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
