import { Component, OnInit } from '@angular/core';
import { DatosporfolioService } from 'src/app/servicios/datosporfolio.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { GlobalvarService } from 'src/app/servicios/globalvar.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})


export class EncabezadoComponent implements OnInit {
  userLog:FormGroup;
    constructor(private datosporfolio:DatosporfolioService, private modalService: NgbModal,private formBuilder: FormBuilder, private variablesglobales: GlobalvarService){
      this.userLog = this.formBuilder.group({
        // firstName: ['', Validators.required],
        // lastName: ['', Validators.required],
         email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
         password: ['', [Validators.required, Validators.minLength(6)]]
     });
    }
    editmode=this.variablesglobales.editmode;
    datosPorfolio:any= {};
    closeResult: string="";
    //pass:string="";
    //email:string="";

   /* userLog = new FormGroup({
      email: new FormControl('',[
        Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      pass: new FormControl('')
      });*/

      submitted = false;
    ngOnInit(){
        this.datosporfolio.get_nombre().subscribe(datoslistos =>{
          this.datosPorfolio=datoslistos;
          }
        );


    }


    public validarSuperuser(content: any){
      console.log("POP");
      this.modalService.open(content, {ariaLabelledBy: 'ordenWiring'}).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });

    }

    private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return  `with: ${reason}`;
      }
    }


    get primEmail(){
      return this.userLog.get('email')
    }

    get f() {return this.userLog.get('email');}

    public logear(content: any){
      this.submitted = true;

      // stop here if form is invalid
      if (this.userLog.invalid) {
          return;
      }

      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.userLog.value))
      console.log("wer");
      console.log(this.userLog.get('email'));
      console.log(this.userLog.get('pass'));
    }
  }


/*
          <form>

        <!-- Email input -->
        <div class="form-outline mb-4">
          <input type="email" id="form2Example1" class="form-control" name="user" required ng-model="email" [(ngModel)]="email" [email]="true"
          [ngClass]="{'is-invalid': email?.errors && email?.touched, 'is-valid': !email?.errors && email?.touched }"


          />
          <label class="form-label" for="form2Example1">Email address</label>
        </div>




        <input  formControlName="email"
| class="form-control™ id="exampleInputEmail1l™ aria-describedby="emailHelp">
<div *ngIf="email?.errors && email?.touched">
<p *ngIf="Email?.hasError('required’)" class="text-danger">
El email es requerido.
</p>
<p *ngIf="Email?.hasError('email’')" class="text-danger">
El formato del email debe ser valido.
</p>
</div>
</div>
<div class="mb-3">
<label for="exampleInputPasswordl” class="form-label”>Contrasefia</label>
<input type="password” formControlName="password” class="form-control™ id="exampleInputPassword1”>
<div *ngIf="Password?.errors & Password?.touched">
<p *ngIf="Password?.hasError('required’)"” class="text-danger">
La contrasefia es requerida.
</p>
<p *ngIf="Password?.errors?.minlength” class="text-danger">
La contrasefia debe ser de 8 o mas caracteres.
</p>


        <!-- Password input -->
        <div class="form-outline mb-4">
          <input type="password" id="form2Example2" class="form-control" name="pass" [(ngModel)]="pass"/>
          <label class="form-label" for="form2Example2">Password</label>
        </div>

        <!-- 2 column grid layout for inline styling
        <div class="row mb-4">
          <div class="col d-flex justify-content-center">
             Checkbox
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
              <label class="form-check-label" for="form2Example31"> Remember me </label>
            </div>
          </div>-->


            <!-- Simple link
              <div class="col">
            <a href="#!">Forgot password?</a>
          </div>
        </div>-->


        <!--Submit button-->
        <button type="button" class="btn btn-primary btn-block mb-4" (click)="logear(loginpage)" ng-disabled="inquiryForm.$invalid">Sign in</button>

        <!-- Register buttons

        <div class="text-center">
          <p>Not a member? <a href="#!">Register</a></p>
          <p>or sign up with:</p>
          <button type="button" class="btn btn-link btn-floating mx-1">
            <i class="fab fa-facebook-f"></i>
          </button>

          <button type="button" class="btn btn-link btn-floating mx-1">
            <i class="fab fa-google"></i>
          </button>

          <button type="button" class="btn btn-link btn-floating mx-1">
            <i class="fab fa-twitter"></i>
          </button>

          <button type="button" class="btn btn-link btn-floating mx-1">
            <i class="fab fa-github"></i>
          </button>
        </div>
         -->

      </form>

*/
