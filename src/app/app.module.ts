import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HighchartsChartModule } from 'highcharts-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BombasDeCalorComponent } from './component/bombas-de-calor/bombas-de-calor.component';
import { CepSearchComponent } from './component/cep-search/cep-search.component';
import { AssistenciaTecnicaComponent } from './component/contato/assistencia-tecnica/assistencia-tecnica.component';
import { ContatoComponent } from './component/contato/contato.component';
import { SacComponent } from './component/contato/sac/sac.component';
import { SejaUmaRevendaComponent } from './component/contato/seja-uma-revenda/seja-uma-revenda.component';
import { TrabalheConoscoComponent } from './component/contato/trabalhe-conosco/trabalhe-conosco.component';
import { FooterComponent } from './component/footer/footer.component';
import { FromthermComponent } from './component/fromtherm/fromtherm.component';
import { HomeComponent } from './component/home/home.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { OndeComprarComponent } from './component/onde-comprar/onde-comprar.component';
import { RepresentantesComponent } from './component/representantes/representantes.component';
import { SimuladorComponent } from './component/simulador/simulador.component';
import { TestimonialsComponent } from './component/testimonials/testimonials.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FromthermComponent,
    NavbarComponent,
    BombasDeCalorComponent,
    OndeComprarComponent,
    RepresentantesComponent,
    FooterComponent,
    TestimonialsComponent,
    AssistenciaTecnicaComponent,
    ContatoComponent,
    TrabalheConoscoComponent,
    SacComponent,
    SejaUmaRevendaComponent,
    CepSearchComponent,
    SimuladorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    HighchartsChartModule,
    NgbDropdownModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
