import { Component, inject, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MetasInterfaz } from '../../core/models/metas';
import { MetasService } from '../../services/metas';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo',
  imports: [ReactiveFormsModule],
  templateUrl: './nuevo.html',
  styleUrl: './nuevo.css',
})
export class Nuevo implements OnChanges {
  @Input()
  metasIng?: MetasInterfaz;
  metaEnviar!: MetasInterfaz;
  metasService = inject(MetasService);
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
  constructor(private router: Router) {}
  ngOnChanges(changes: SimpleChanges): void {
    if (this.metasIng) {
      this.formularioDeMetas.setValue({
        id: this.metasIng.id,
        detalles: this.metasIng.detalles,
        periodo: this.metasIng.periodo,
        eventos: this.metasIng.eventos,
        icono: this.metasIng.icono,
        meta: this.metasIng.meta,
        plazo: this.metasIng.plazo,
        completado: this.metasIng.completado,
      });
    }
  }
  llenarMetaAEnviar() {
    this.metaEnviar = {
      id: this.metasIng ? this.metasIng.id : Math.random().toString(),
      detalles: this.formularioDeMetas.value.detalles!,
      periodo: this.formularioDeMetas.value.periodo!,
      eventos: this.formularioDeMetas.value.eventos!,
      icono: this.formularioDeMetas.value.icono!,
      meta: this.formularioDeMetas.value.meta!,
      plazo: this.formularioDeMetas.value.plazo!,
      completado: this.formularioDeMetas.value.completado!,
    };
  }

  subirFormulario() {
    this.llenarMetaAEnviar();
    this.metasService.crearMetas(this.metaEnviar);
    this.router.navigate(['/']);
  }
  actualizarMeta() {
    this.llenarMetaAEnviar();
    this.metasService.actualizarMetas(this.metaEnviar);
    this.router.navigate(['/']);
  }
  eliminarMeta() {
    this.llenarMetaAEnviar();
    this.metasService.eliminarMetas(this.metaEnviar);
    this.router.navigate(['/']);
  }
  cancelar() {
    this.router.navigate(['/']);
  }
}
