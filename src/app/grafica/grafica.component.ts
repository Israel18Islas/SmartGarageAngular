import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.css']
})
export class GraficaComponent implements OnInit {
  title: string = "Smart Garage";
  reads: any = [];

  Highcharts: typeof Highcharts = Highcharts;
  graficaPrueba: Highcharts.Options = {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Device readings'
    },
    xAxis: {
      categories: []
    },
    series: [
      {
        data: [],
        type: 'column'
      }
    ]
  };

  constructor(protected userService: AppService) { }

  ngOnInit() {
    this.userService.getReads()
      .subscribe( 
        (data) => { // Success
          this.reads = data['devices'];
          const datosGrafica = this.reads.map(x => x.readings);
          const nombre = this.reads.map(x  => x.date);

          //Highcharts
          this.graficaPrueba.series[0]['data'] = datosGrafica;
          this.graficaPrueba.xAxis['categories'] = nombre;
          Highcharts.chart('MediosdPPrincipal', this.graficaPrueba);
        },
        (err) => {
          console.error(err);
        }
      );
  }

}
