import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import axios from 'axios';
import { Veiculo } from '../veiculo.model';

@Component({
  selector: 'app-modal-veiculo',
  templateUrl: './modal.component.html',
})
export class ModalComponent {
  editVeiculoForm!: FormGroup;
  veiculo!: Veiculo;

  constructor(private fb: FormBuilder, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.editVeiculoForm = this.fb.group({
      placa: [''],
      cor: [''],
      anoModelo: [''],
      marca: [''],
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
    // this.modalService.dismissAll();

    console.log(this.veiculo.id);

    // axios
    //   .put(
    //     `http://localhost:8080/api/marca/${this.marca.id}`,
    //     this.editProfileForm.getRawValue()
    //   )
    //   .then((_) => window.location.reload());

    // console.log('res:', this.editProfileForm.getRawValue());
  }
}
