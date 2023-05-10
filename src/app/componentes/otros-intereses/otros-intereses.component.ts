import { Component,OnInit } from '@angular/core';
import { DatosporfolioService } from 'src/app/servicios/datosporfolio.service';
import { GlobalvarService } from 'src/app/servicios/globalvar.service';

@Component({
  selector: 'app-otros-intereses',
  templateUrl: './otros-intereses.component.html',
  styleUrls: ['./otros-intereses.component.css']
})
export class OtrosInteresesComponent implements OnInit{

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
