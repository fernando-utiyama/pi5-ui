import { Component, OnInit } from '@angular/core';
import { ListaService } from './lista.service';
import { Registro } from './registro.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  registros: Registro[] = [];

  constructor(private listaService: ListaService) { }

  ngOnInit(): void {
    this.listaService.list().subscribe(
      data => {
        this.registros = data;
      },
      error => { console.log(error)}
    );
  }

  experimento() {

  }
}
