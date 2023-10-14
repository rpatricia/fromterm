import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BombasDeCalorComponent } from './component/bombas-de-calor/bombas-de-calor.component';
import { CepSearchComponent } from './component/cep-search/cep-search.component';
import { AssistenciaTecnicaComponent } from './component/contato/assistencia-tecnica/assistencia-tecnica.component';
import { ContatoComponent } from './component/contato/contato.component';
import { SacComponent } from './component/contato/sac/sac.component';
import { SejaUmaRevendaComponent } from './component/contato/seja-uma-revenda/seja-uma-revenda.component';
import { TrabalheConoscoComponent } from './component/contato/trabalhe-conosco/trabalhe-conosco.component';
import { FromthermComponent } from './component/fromtherm/fromtherm.component';
import { HomeComponent } from './component/home/home.component';
import { SimuladorComponent } from './component/simulador/simulador.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'fromtherm', component: FromthermComponent },
  { path: 'bombas-de-calor', component: BombasDeCalorComponent },
  {
    path: 'onde-comprar',
    redirectTo: '/cep-search/ondeComprar',
    pathMatch: 'full',
  },
  {
    path: 'representantes',
    redirectTo: '/cep-search/representantes',
    pathMatch: 'full',
  },
  { path: 'cep-search/:type', component: CepSearchComponent },
  { path: 'assistencia-tecnica', component: AssistenciaTecnicaComponent },
  { path: 'contato/trabalhe-conosco', component: TrabalheConoscoComponent },
  { path: 'contato/sac', component: SacComponent },
  { path: 'contato/seja-uma-revenda', component: SejaUmaRevendaComponent },
  { path: 'contato/:subject', component: ContatoComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'simulador', component: SimuladorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
