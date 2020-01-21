import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AltaUsuarioRoutingModule } from './alta-usuario-routing.module';
import { AltaUsuarioComponent } from './alta-usuario.component';

@NgModule({
  declarations: [AltaUsuarioComponent],
  imports: [
    CommonModule,
    AltaUsuarioRoutingModule
  ]
})
export class AltaUsuarioModule { }
