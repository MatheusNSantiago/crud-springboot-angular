import { Component } from '@angular/core';
import axios from 'axios';
import { Marca } from 'src/app/marca/marca.model';
import { Veiculo } from '../../veiculo.model';

@Component({
  selector: 'gc-veiculo-create',
  templateUrl: './veiculo-create.component.html',
})
export class VeiculoCreateComponent {
  placa!: string;
  cor!: string;
  anoModelo!: number;
  marca!: number;

  marcas = [{ id: -1, sigla: '_' }];

  ngOnInit(): void {
    axios
      .get('http://localhost:8080/api/marcas')
      .then((response) => (this.marcas = response.data));
  }

  createVeiculo(): void {
    console.log(this.marca);

    const veiculo: Veiculo = {
      placa: this.placa,
      cor: this.cor,
      anoModelo: this.anoModelo,
      marca: this.marca,
    };

    axios
      .post('http://localhost:8080/api/veiculo', veiculo)
      .then((_) => window.location.reload());
  }
}
