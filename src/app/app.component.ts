import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Marca } from './marca/marca.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'trab-final-pc3';
  marca!: Marca;
  editProfileForm!: FormGroup;

  constructor(private fb: FormBuilder, private modalService: NgbModal) {}

  marcas = [
    {
      id: undefined,
      sigla: '',
      descricao: '',
    },
  ];

  ngOnInit(): void {
    this.editProfileForm = this.fb.group({
      sigla: [''],
      descricao: [''],
    });

    axios.get('http://localhost:8080/api/marcas').then((response) => {
      this.marcas = response.data;
      this.marcas.sort((a, b) => a.id! - b.id!);
    });
  }

  deleteMarca(id: string) {
    axios.delete('http://localhost:8080/api/marca/' + id).then((_) => {
      window.location.reload();
    });
  }

  openModal(targetModal: any, marca: Marca) {
    this.marca = marca;

    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static',
    });

    this.editProfileForm.patchValue({
      sigla: marca.sigla,
      descricao: marca.descricao,
    });
  }
  onSubmit() {
    this.modalService.dismissAll();
    axios
      .put(
        `http://localhost:8080/api/marca/${this.marca.id}`,
        this.editProfileForm.getRawValue()
      )
      .then((_) => window.location.reload());
  }
}
