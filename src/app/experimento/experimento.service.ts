import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Experimento} from './experimento.model'
import { Observable,from } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ExperimentoService {

  configUrl = '<http://localhost:8080>';

  constructor(private http: HttpClient) {

  }

  postCommand() {
    let experimento = new Experimento();
    experimento.command = '1111'
    experimento.dateTime = '2021-06-05 10:37'
    experimento.medidas = 'Volume 1: 103, Massa 1: 100g, Volume 2: 113, Massa 2: 105g'
    return this.http.post<Experimento>(this.configUrl, experimento);
  }
}
