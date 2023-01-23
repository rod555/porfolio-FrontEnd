import { Component , OnInit} from '@angular/core';
import { DatosporfolioService } from 'src/app/servicios/datosporfolio.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent  implements OnInit{

  constructor(private datosporfolio:DatosporfolioService){}

  datosPorfolio:any;

  ngOnInit(){
      this.datosporfolio.get_nombre().subscribe(datoslistos =>{
        this.datosPorfolio=datoslistos;
        }
      );
  }

}
