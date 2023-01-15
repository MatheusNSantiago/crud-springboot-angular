import { Component } from '@angular/core';
import { MarcaService } from '../marca.service';
import { Marca } from '../marca.model';

@Component({
  selector: 'gc-marca-create',
  templateUrl: './marca-create.component.html',
  styleUrls: ['./marca-create.component.css'],
})
export class MarcaCreateComponent {
  sigla!: string;
  descricao!: string;

  constructor(private marcaService: MarcaService) {}

  createMarca() {
    const marca: Marca = {
      sigla: this.sigla,
      descricao: this.descricao,
    };

    this.marcaService.createMarca(marca);
  }
}
