
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']

})


export class LoginModalComponent {
/*
    closeResult = '';

    constructor(private modalService: NgbModal) {}

    open(content) {
      this.modalService.open(content,
     {ariaLabelledBy: 'modal-basic-title'}).result.then((result)
        => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult =
           `Dismissed ${this.getDismissReason(reason)}`;
      });
    }*/
/*
    private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return `with: ${reason}`;
      }
    }*/
    closeResult: string="";
    constructor(private modalService: NgbModal) {}



    public popUpOrden(content:any){
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
  }
