import { Component , OnInit} from '@angular/core';
import { DatosporfolioService } from 'src/app/servicios/datosporfolio.service';
import { GlobalvarService } from 'src/app/servicios/globalvar.service';

@Component({
  selector: 'app-antecedentes-laborales',
  templateUrl: './antecedentes-laborales.component.html',
  styleUrls: ['./antecedentes-laborales.component.css']
})
export class AntecedentesLaboralesComponent  implements OnInit{

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
