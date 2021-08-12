import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HighchartsChartModule } from 'highcharts-angular';
import { HttpClientModule} from '@angular/common/http';
import { AppService } from './app.service';
import { app_routing } from './router';

import { AppComponent } from './app.component';
import { CambioComponent } from './cambio/cambio.component';
import { GraficaComponent } from './grafica/grafica.component';

@NgModule({
  declarations: [
    AppComponent,
    CambioComponent,
    GraficaComponent
  ],
  imports: [
    BrowserModule,
    HighchartsChartModule,
    HttpClientModule,
    RouterModule,
    app_routing
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
