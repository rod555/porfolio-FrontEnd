import { Component,OnInit } from '@angular/core';
import { DatosporfolioService } from 'src/app/servicios/datosporfolio.service';
import { GlobalvarService } from 'src/app/servicios/globalvar.service';

@Component({
  selector: 'app-proyectos-realizados',
  templateUrl: './proyectos-realizados.component.html',
  styleUrls: ['./proyectos-realizados.component.css']
})
export class ProyectosRealizadosComponent  implements OnInit{

  constructor(private datosporfolio:DatosporfolioService, private variablesglobales: GlobalvarService){}
  editmode=this.variablesglobales.editmode;

  datosPorfolio:any={};

  ngOnInit(){
      this.datosporfolio.get_nombre().subscribe(datoslistos =>{
        this.datosPorfolio=datoslistos;
        }
      );
  }

}
