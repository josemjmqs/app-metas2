import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MetasInterfaz } from '../../core/models/metas';

@Component({
  selector: 'app-nuevo',
  imports: [ReactiveFormsModule],
  templateUrl: './nuevo.html',
  styleUrl: './nuevo.css',
})
export class Nuevo {
  metaEnviar!: MetasInterfaz;
  formularioDeMetas = new FormGroup({
    id: new FormControl(),
    detalles: new FormControl(),
    periodo: new FormControl(),
    eventos: new FormControl(),
    icono: new FormControl(),
    meta: new FormControl(),
    plazo: new FormControl(),
    completado: new FormControl(),
  });

  frecuencias = ['dia', 'semana', 'mes', 'año'];
  iconos = ['💻', '🏃‍♂️', '📚', '🛩️', '💵'];

  subirFormulario() {
    this.metaEnviar = {
      id: Math.random().toString(),
      detalles: this.formularioDeMetas.value.detalles,
      periodo: this.formularioDeMetas.value.periodo,
      eventos: this.formularioDeMetas.value.eventos,
      icono: this.formularioDeMetas.value.icono,
      meta: this.formularioDeMetas.value.meta,
      plazo: this.formularioDeMetas.value.plazo,
      completado: this.formularioDeMetas.value.completado,
    };
    console.log(this.metaEnviar);
  }
}
