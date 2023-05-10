import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { AntecedentesLaboralesComponent } from './componentes/antecedentes-laborales/antecedentes-laborales.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { ProyectosRealizadosComponent } from './componentes/proyectos-realizados/proyectos-realizados.component';
import { OtrosInteresesComponent } from './componentes/otros-intereses/otros-intereses.component';
import { LoginModalComponent } from './componentes/login-modal/login-modal.component';
import { FormsModule } from "@angular/forms";
//app.module.ts
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    AcercaDeComponent,
    AntecedentesLaboralesComponent,
    EducacionComponent,
    SkillsComponent,
    ProyectosRealizadosComponent,
    OtrosInteresesComponent,
    LoginModalComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
