import { Injectable } from '@angular/core';
import { Estacion } from './estacion';
import { routing } from './app.router';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class EstacionserviceService {

  private urlAgregar = 'http://localhost:8080/LaPlataEnBici/rest/Estacion/create';
  private urlEstaciones = 'http://localhost:8080/LaPlataEnBici/rest/Estacion/listadoEstaciones';
  private urlEstacion = 'http://localhost:8080/LaPlataEnBici/rest/Estacion/';

  agregarEstacion(est: Estacion): Observable<Estacion> {

    let headers = new Headers( {'Content-Type' : 'application/json' } );
    let options = new RequestOptions({ headers: headers });
    console.log('Entro en agregarEstacion');
    return this.http.post(this.urlAgregar,  JSON.stringify(est), options ).map((res: Response) =>
       // console.log('Este es el valor del id generado desde web service' + res.json()),
       this.route.navigate(['/estacioncreada',  res.json()] ))
            .catch(this.handleError);
  }


  getEstaciones(): Observable<Estacion[]> {
      console.log('Entro en getEstaciones');
        return this.http.get(this.urlEstaciones)
            .map((response: Response) => <Estacion[]>response.json())
            .catch(this.handleError);
    }

  constructor(private http: Http, private route: Router) {

  }

  handleError(error: any) {
    const msg = (error.message) ? error.message : 'Error desconocido';
    console.error(msg);
    return Observable.throw(msg);
  }


  getEstacion(id: number): Observable<Estacion> {
        console.log('Entro en getEstacion de Estacion Service' + id);
        let url = this.urlEstacion + id;
        console.log('Este es el valor del url del get Estacion: ' + url);
        return this.http.get(
          // 'http://localhost:8080/LaPlataEnBici/rest/Usuario/32768')
             url)
            .map((response: Response) => <Estacion>response.json())
            .catch(this.handleError);
  }




}
