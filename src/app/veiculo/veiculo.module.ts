import { VeiculoCreateComponent } from './veiculo-create/component/veiculo-create.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { VeiculoListComponent } from './veiculo-list/veiculo-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [VeiculoCreateComponent, VeiculoListComponent],
  exports: [VeiculoCreateComponent, VeiculoListComponent],
})
export class VeiculoModule {}
