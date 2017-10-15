import { Bicicleta } from '../bicicleta';
import { BicicletaserviceService } from '../bicicletaservice.service';
import { Component, OnInit } from '@angular/core';
import { Estado } from '../Estado';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-listadobicicleta',
  templateUrl: './listadobicicleta.component.html',
  styleUrls: ['./listadobicicleta.component.css']
})
export class ListadobicicletaComponent implements OnInit {


public bicicletas: Bicicleta[] = [];
public estados: Estado[] = [];

  constructor(private bicicletaService: BicicletaserviceService) {

  }

    ngOnInit() {
    console.log('Entro en ngOnInit');
    this.bicicletaService.getBicicletas().subscribe(
    user => this.bicicletas = user,
    error => this.bicicletaService.handleError = <any>error);
    
        this.estados.push(new Estado('1', 'Operativa'));
        this.estados.push(new Estado('2', 'Cerrada'));
        this.estados.push(new Estado('3', 'En construccion'));
        this.estados.push(new Estado('4', 'En construccion'));     
  }
}
