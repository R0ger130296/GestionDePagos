import { HttpClient } from '@angular/common/http';
import { Orden_Gasto } from './../model/OrdenGasto';
import { OrdenGastoService } from '../services/OrdenGasto.service';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/components/common/messageservice';
import { RouterModule, ActivatedRoute, Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-cancelar',
  templateUrl: './cancelar.component.html',
  styleUrls: ['./cancelar.component.css'],
  // providers: [OrdenGastoService]
})
export class CancelarComponent implements OnInit {
  OrdenGastoService: any;

  ordenGastos: any;

  date: Date;
  constructor(
    private http: HttpClient,
    private ordenGastoDataService: OrdenGastoService,

  ) {}

  ngOnInit() {
    this.buscarOrdenGasto();
  }
  buscarOrdenGasto() {
    this.ordenGastoDataService.buscarOrdenGasto().subscribe(respuesta => {
        this.ordenGastos = respuesta;
        console.log(this.ordenGastos);
    },
        err => {
        }
    );
  }
}
