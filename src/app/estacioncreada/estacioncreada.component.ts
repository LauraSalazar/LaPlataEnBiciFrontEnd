import { Estacion } from '../estacion';
import { EstacionserviceService } from '../estacionservice.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Estado } from '../Estado';

@Component({
  selector: 'app-estacioncreada',
  templateUrl: './estacioncreada.component.html',
  styleUrls: ['./estacioncreada.component.css']
})
export class EstacioncreadaComponent implements OnInit {

estacion:  Estacion = new Estacion(0, ' ', ' ', ' ',
       ' ', ' ', ' ', ' ', 0);
 public estados: Estado[] = [] ;    

  constructor(private estacionService: EstacionserviceService, private route: ActivatedRoute) { 
     console.log('Entro en el constructor DE ESTACIONCREADA');
     }

  ngOnInit() {

      console.log('Entro en el ngOnInit, valor del id generado en estacioncreado:' + this.route.snapshot.params['id']);
      this.estacion.id = this.route.snapshot.params['id'];
      this.estacionService.getEstacion(this.estacion.id).subscribe(
    estacion => this.estacion = estacion,
    error => this.estacionService.handleError = <any>error);
    console.log('Valores de estacion en estacioncreada luego de llamar al getEstacion');
    console.log('this.estacion.id: ' +  this.estacion.id );
    console.log('this.estacion.nombre: ' +  this.estacion.nombre );
    console.log('this.estacion.codigopostal: ' +  this.estacion.codigopostal );
    console.log('this.estacion.latitud: ' +  this.estacion.latitud );
    console.log('this.estacion.longitud: ' +  this.estacion.longitud );
    console.log('this.estacion.estado: ' +  this.estacion.estado );
    console.log('this.estacion.abiertodesde: ' +  this.estacion.abiertodesde );

        this.estados.push(new Estado('1', 'Operativa'));
        this.estados.push(new Estado('2', 'Cerrada'));
        this.estados.push(new Estado('3', 'En construccion'));
  }

}
