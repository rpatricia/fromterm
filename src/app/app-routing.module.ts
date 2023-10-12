import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './component/home/home.component';
import { FromthermComponent } from './component/fromtherm/fromtherm.component';
import { BombasDeCalorComponent } from './component/bombas-de-calor/bombas-de-calor.component';
import { OndeComprarComponent } from './component/onde-comprar/onde-comprar.component';
import { RepresentantesComponent } from './component/representantes/representantes.component';
import { AssistenciaTecnicaComponent } from './component/contato/assistencia-tecnica/assistencia-tecnica.component';
import { ContatoComponent } from './component/contato/contato.component';
import { TrabalheConoscoComponent } from './component/contato/trabalhe-conosco/trabalhe-conosco.component';
import { SacComponent } from './component/contato/sac/sac.component';
import { SejaUmaRevendaComponent } from './component/contato/seja-uma-revenda/seja-uma-revenda.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'fromtherm', component: FromthermComponent },
  { path: 'bombas-de-calor', component: BombasDeCalorComponent },
  { path: 'onde-comprar', component: OndeComprarComponent },
  { path: 'representantes', component: RepresentantesComponent },
  { path: 'assistencia-tecnica', component: AssistenciaTecnicaComponent },
  { path: 'contato/trabalhe-conosco', component: TrabalheConoscoComponent },
  { path: 'contato/sac', component: SacComponent },
  { path: 'contato/seja-uma-revenda', component: SejaUmaRevendaComponent },
  { path: 'contato/:subject', component: ContatoComponent },
  { path: 'contato', component: ContatoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
