import { Component, inject } from '@angular/core';
import { Metas } from '../../design/metas/metas';
import { MetasService } from '../../services/metas';
import { MetasInterfaz } from '../../core/models/metas';

@Component({
  selector: 'app-listar-metas',
  imports: [Metas],
  templateUrl: './listar-metas.html',
  styleUrl: './listar-metas.css',
})
export class ListarMetas {
  metasService = inject(MetasService);
  listaDeMetas!: MetasInterfaz[];

  constructor() {
    this.listaDeMetas = this.metasService.obtenerMetas();
  }
}
