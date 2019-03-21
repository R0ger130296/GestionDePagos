import { HistorialEmpleadoService } from './services/HistorialEmpleado';
import { ProveedorService } from './services/Proovedor.service';
import { OrdenGastoService } from './services/OrdenGasto.service';
import { MantenimientoService } from './services/Mantenimiento.service';
import { DetallePagoService } from './services/DetallePago.service';
import { DatosEmpleadoService } from './services/DatosEmpleado.service';
import { ContratoService } from './services/Contrato.service';
import { DetalleCalculoService } from './services/DetalleCalculo.service';
import { HashLocationStrategy, LocationStrategy, registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localeEsAr from '@angular/common/locales/es-AR';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { DeviceDetectorModule } from 'ngx-device-detector';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { FieldsetModule } from 'primeng/fieldset';
import { InputMaskModule } from 'primeng/inputmask';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { TooltipModule } from 'primeng/tooltip';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { HttpErrorHandler } from './http-error-handler.service';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { MessageService } from './message.service';
import { CertificadoPresupuestarioService } from './services/CertificadoPresupuestario.service';

import { InicioComponent } from '../app/inicio/inicio.component';
import { FaqComponent } from 'app/faq/faq.component';
import { CancelarComponent } from 'app/cancelar/cancelar.component';
import { LoginComponent } from 'app/login/login.component';
import { HomeComponent } from './home/home.component';

registerLocaleData(localeEsAr, 'es-Ar');

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    HttpClientModule,
    FieldsetModule,
    NgxSpinnerModule,
    ButtonModule,
    ToastModule,
    DialogModule,
    TableModule,
    TooltipModule,
    InputMaskModule,
    AppRoutingModule,
    DeviceDetectorModule.forRoot()
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    InicioComponent,
    LoginComponent,
    CancelarComponent,
    FaqComponent,
    HomeComponent
  ],
  providers: [ProveedorService, OrdenGastoService, DetallePagoService, MantenimientoService, DatosEmpleadoService,
    MessageService, HttpErrorHandler, ContratoService, DetalleCalculoService, CertificadoPresupuestarioService, HistorialEmpleadoService,
   { provide: LOCALE_ID, useValue: 'es-Ar' },
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
