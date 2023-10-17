import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HighchartsChartModule } from 'highcharts-angular';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './component/admin/admin.component';
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
import { environment } from './environments/environment';
import { BombasDeCalorService } from './services/bombas-de-calor.service';
import { SimuladorService } from './services/simulador.service';
import { AppToastService } from './services/toast.service';

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
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    HighchartsChartModule,
    NgbDropdownModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore()),
  ],
  providers: [BombasDeCalorService, SimuladorService, AppToastService],
  bootstrap: [AppComponent],
})
export class AppModule {}
