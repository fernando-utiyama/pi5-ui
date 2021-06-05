import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Registro } from './registro.model'
import { Observable,from } from 'rxjs';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ListaService {

  private readonly API = 'http://localhost:8080/allrequests';

  constructor(private http: HttpClient) {

  }

  list() {
    //let registros: Registro[] = [];

    //let registroum = new Registro();
    //registroum.command = '1111'
    //registroum.datetime = '2021-06-05 10:37'
    //registroum.medidas = 'Volume 1: 103, Massa 1: 100g, Volume 2: 113, Massa 2: 105g'


    //let registrodois = new Registro();
    //registrodois.command = '1010'
    //registrodois.datetime = '2021-06-05 11:37'
    //registrodois.medidas = 'Volume 1: 103, Massa 1: 100g'

    //registros.push(registroum);
    //registros.push(registrodois);

    //let ob: Observable<Registro> = from(registros);
    //return ob;

    return this.http.get<Registro[]>(this.API)
    .pipe(tap(console.log));

  }
}
