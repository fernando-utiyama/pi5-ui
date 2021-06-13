import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './lista/lista.component';
import { ExperimentoComponent } from './experimento/experimento.component';
import { MatSliderModule } from '@angular/material/slider';

const routes: Routes = [
  {path: '', component: ListaComponent},
  {path: 'lista', component: ListaComponent},
  {path: 'experimento',component: ExperimentoComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes), MatSliderModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
