import { Injectable } from '@angular/core';
import { Bicicleta } from './bicicleta';
import { routing } from './app.router';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';


@Injectable()
export class BicicletaserviceService {
 private urlAgregar = 'http://localhost:8080/LaPlataEnBici/rest/Bicicleta/create';
  private urlBicicletas = 'http://localhost:8080/LaPlataEnBici/rest/Bicicleta/listadoBicicletas';
  private urlBicicleta = 'http://localhost:8080/LaPlataEnBici/rest/Bicicleta/';

  agregarBicicleta(bici: Bicicleta): Observable<Bicicleta> {

    let headers = new Headers( {'Content-Type' : 'application/json' } );
    let options = new RequestOptions({ headers: headers });
    console.log('Entro en agregarEstacion');
    return this.http.post(this.urlAgregar,  JSON.stringify(bici), options ).map((res: Response) =>
       // console.log('Este es el valor del id generado desde web service' + res.json()),
       this.route.navigate(['/bicicletaagregada',  res.json()] ))
            .catch(this.handleError);
  }


  getBicicletas(): Observable<Bicicleta[]> {
        return this.http.get(this.urlBicicletas)
            .map((response: Response) => <Bicicleta[]>response.json())
            .catch(this.handleError);
    }

  constructor(private http: Http, private route: Router) {

  }

  handleError(error: any) {
    const msg = (error.message) ? error.message : 'Error desconocido';
    console.error(msg);
    return Observable.throw(msg);
  }


  getBicicleta(id: number): Observable<Bicicleta> {
        console.log('Entro en getBicicleta de Bicicleta Service' + id);
        let url = this.urlBicicleta + id;
        console.log('Este es el valor del url del get Bicicleta: ' + url);
        return this.http.get(
          // 'http://localhost:8080/LaPlataEnBici/rest/Bicicleta/32768')
             url)
            .map((response: Response) => <Bicicleta>response.json())
            .catch(this.handleError);
  }

}
