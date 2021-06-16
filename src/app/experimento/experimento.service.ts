import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Experimento } from './experimento.model';

@Injectable({
  providedIn: 'root'
})
export class ExperimentoService {

  private readonly APIPOST = 'https://univesp-campinas-pi5.herokuapp.com/api/request';

  private readonly APIGET = 'https://univesp-campinas-pi5.herokuapp.com/api/request';

  constructor(private http: HttpClient) {

  }

  postCommand(volume1: boolean, volume2: boolean, peso1: boolean, peso2: boolean) {
    console.log("Enviou comando");
    var comando: string = ""; 
    if (volume1 == false) {
      comando = comando.concat("0")
    } else {
      comando = comando.concat("1")
    }
    if (peso1 == false) {
      comando = comando.concat("0")
    } else {
      comando = comando.concat("1")
    }
    if (volume2 == false) {
      comando = comando.concat("0")
    } else {
      comando = comando.concat("1")
    }
    if (peso2 == false) {
      comando = comando.concat("0")
    } else {
      comando = comando.concat("1")
    }

    var experimento = { command: comando };
    return this.http.post<Experimento>(this.APIPOST, experimento);
  }

  getResponse(id: number) {
    const params = new HttpParams().append('id', id);
    return this.http.get<Experimento>(this.APIGET, {params}); 
  }

}
