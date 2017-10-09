import {Usuario} from './Usuario';
import { routing } from './app.router';
import {Injectable} from '@angular/core';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class UsuarioserviceService {

  private urlAgregar = 'http://localhost:8080/LaPlataEnBici/rest/Usuario/create';
  private urlUsuarios = 'http://localhost:8080/LaPlataEnBici/rest/Usuario/listadoUsuario';
  private urlUsuario = 'http://localhost:8080/LaPlataEnBici/rest/Usuario/';

  agregarUsuario(usu: Usuario): Observable<Usuario> {

    let headers = new Headers( {'Content-Type' : 'application/json' } );
    let options = new RequestOptions({ headers: headers });
    console.log('Entro en agregarUsuario');
    return this.http.post(this.urlAgregar,  JSON.stringify(usu), options ).map((res: Response) =>
       // console.log('Este es el valor del id generado desde web service' + res.json()),
       this.route.navigate(['/usuariocreado',  res.json()] ))
            .catch(this.handleError);
  }


  getUsuarios(): Observable<Usuario[]> {
        return this.http.get(this.urlUsuarios)
            .map((response: Response) => <Usuario[]>response.json())
            .catch(this.handleError);
    }

  constructor(private http: Http, private route: Router) {

  }

  handleError(error: any) {
    const msg = (error.message) ? error.message : 'Error desconocido';
    console.error(msg);
    return Observable.throw(msg);
  }


  getUser(id: number): Observable<Usuario> {
        console.log('Entro en getUser de Usuario Service' + id);
        let url = this.urlUsuario + id;
        console.log('Este es el valor del url del get Usuario: ' + url);
        return this.http.get(
          // 'http://localhost:8080/LaPlataEnBici/rest/Usuario/32768')
             url)
            .map((response: Response) => <Usuario>response.json())
            .catch(this.handleError);
  }
}
