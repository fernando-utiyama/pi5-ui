import { ExperimentoService } from './experimento.service';
import { Component, OnInit } from '@angular/core';

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

  medidas: string = "Aguardando";

  constructor(private experimentoService: ExperimentoService) { }

  enviar() {
    this.loading = true;
    this.experimentoService.postCommand(this.volume1, this.volume2, this.peso1, this.peso2).subscribe(
      resultado => {
        this.medidas = resultado.medidas;
      },
      erro => {
        if(erro.status == 400) {
          console.log(erro);
          this.loading = false;
        }
      }
    );
    if (this.medidas == "") {
      this.medidas = "Erro"
    }
    this.loading = false;
    console.log('volume1', this.volume1);
    console.log('volume2', this.volume2);
    console.log('peso1', this.peso1);
    console.log('peso2', this.peso2);
  }

  ngOnInit(): void {
  }

}
