import { Component, OnInit } from '@angular/core';
import { ListaService } from './lista.service';
import { Registro } from './registro.model';
import { timer } from 'rxjs';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  registros: Registro[] = [];

  constructor(private listaService: ListaService) { }

  ngOnInit(): void {
    const on$ = timer(2000, 240);
    on$.subscribe((d) =>
      this.listaService.list().subscribe(
        data => {
          this.registros = data;
        },
        error => { console.log(error)}
      )
    );     

  }

  experimento() {

  }
}
