import { Component, OnInit } from '@angular/core';
import { DatosporfolioService } from 'src/app/servicios/datosporfolio.service';


@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

    constructor(private datosporfolio:DatosporfolioService){}

    datosPorfolio:any= {};

    ngOnInit(){
        this.datosporfolio.get_nombre().subscribe(datoslistos =>{
          this.datosPorfolio=datoslistos;
          }
        );
    }

  }
