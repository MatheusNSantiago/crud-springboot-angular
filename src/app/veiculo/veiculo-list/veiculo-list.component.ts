import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import axios from 'axios';
import { Veiculo } from '../veiculo.model';

@Component({
  selector: 'gc-veiculo-list',
  templateUrl: './veiculo-list.component.html',
})
export class VeiculoListComponent implements OnInit {
  editVeiculoForm!: FormGroup;
  veiculo!: Veiculo;

  veiculos = [{ id: -1, placa: '', cor: '', anoModelo: 0, marca: 0 }];
  marcas = [
    {
      id: undefined,
      sigla: '',
      descricao: '',
    },
  ];

  constructor(private fb: FormBuilder, private modalService: NgbModal) {}


  getSigla(id: number) {
    return this.marcas.find((marca) => marca.id === id)?.sigla;
  }

  ngOnInit(): void {
    this.listAllVeiculos();
    this.editVeiculoForm = this.fb.group({
      placa: [''],
      cor: [''],
      anoModelo: [-1],
      marca: [1],
    });

    axios.get('http://localhost:8080/api/marcas').then((response) => {
      this.marcas = response.data;
    });
  }

  listAllVeiculos() {
    axios.get('http://localhost:8080/api/veiculos').then((response) => {
      this.veiculos = response.data;

      this.veiculos.sort((a, b) => a.id! - b.id!);
    });
  }

  deleteVeiculo(id: number): void {
    axios.delete(`http://localhost:8080/api/veiculo/${id}`).then((_) => {
      this.listAllVeiculos();
    });
  }

  openModal(targetModal: any, veiculo: Veiculo) {
    this.veiculo = veiculo;

    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static',
    });

    this.editVeiculoForm.patchValue({
      placa: veiculo.placa,
      cor: veiculo.cor,
      anoModelo: veiculo.anoModelo,
      marca: veiculo.marca,
    });
  }

  onSubmit() {
    this.modalService.dismissAll();
    axios
      .put(
        `http://localhost:8080/api/marca/${this.veiculo.id}`,
        this.editVeiculoForm.getRawValue()
      )
      .then((_) => window.location.reload());

  }
}
