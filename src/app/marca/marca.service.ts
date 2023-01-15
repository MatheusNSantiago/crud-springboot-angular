import { Marca } from './marca.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class MarcaService {
  private API = 'http://localhost:8080/api/';

  createMarca(marca: Marca) {
    axios.post(this.API + 'marca', marca).then((_: any) => {
      window.location.reload();
    });
  }

  async listMarcas() {
    const response = await axios.get(this.API + 'marcas');
    return response.data;
  }

}
