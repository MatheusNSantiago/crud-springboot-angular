import { MarcaCreateComponent } from './marca-create/marca-create.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [MarcaCreateComponent ],
  imports: [CommonModule, FormsModule ],
  exports: [MarcaCreateComponent ],
})
export class CursoModule {}
