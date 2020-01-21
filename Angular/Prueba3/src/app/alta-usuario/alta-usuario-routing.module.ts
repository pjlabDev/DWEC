import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AltaUsuarioComponent } from './alta-usuario.component';

const routes: Routes = [{ path: '', component: AltaUsuarioComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AltaUsuarioRoutingModule { }
