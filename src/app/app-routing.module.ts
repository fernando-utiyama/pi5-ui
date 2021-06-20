import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './lista/lista.component';
import { ExperimentoComponent } from './experimento/experimento.component';

const routes: Routes = [
  {path: '', component: ListaComponent},
  {path: 'lista', component: ListaComponent},
  {path: 'experimento',component: ExperimentoComponent, runGuardsAndResolvers: 'always'}
]


@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})

export class AppRoutingModule { }
