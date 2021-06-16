import { ExperimentoService } from './experimento.service';
import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-experimento',
  templateUrl: './experimento.component.html',
  styleUrls: ['./experimento.component.css']
})
export class ExperimentoComponent implements OnInit {

  loading: boolean = false;

  volume1: boolean = false;
  volume2: boolean = false;
  peso1: boolean = false;
  peso2: boolean = false;

  medidas: string | undefined;
  status: string | undefined;  
  id: number | undefined;

  constructor(private experimentoService: ExperimentoService) { }

  enviar() {
    this.experimentoService.postCommand(this.volume1, this.volume2, this.peso1, this.peso2)
    .subscribe(
      resultado => {
        this.id = resultado.id;
        this.status = resultado.arduinoStatus;
        this.medidas = resultado.medidas;

        this.consulta(this.id);

        console.log('status', this.status);
        console.log('id', this.id);
      },
      erro => {
        console.log(erro);
      }
    );
    console.log('volume1', this.volume1);
    console.log('volume2', this.volume2);
    console.log('peso1', this.peso1);
    console.log('peso2', this.peso2);
  }

  consulta(id: number) {
    const on$ = timer(1000, 180);
    on$.subscribe((d) =>     
    this.experimentoService.getResponse(id).subscribe(
      novoresultado => {
        this.status = novoresultado.arduinoStatus;
        this.medidas = novoresultado.medidas;
        console.log('status', this.status);
        console.log('id', this.id);
      }
    ));
  }

  ngOnInit(): void {
  }



}
