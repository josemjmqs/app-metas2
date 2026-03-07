import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Metas } from '../../design/metas/metas';
import { MetasService } from '../../services/metas';
import { MetasInterfaz } from '../../core/models/metas';

@Component({
  selector: 'app-listar-metas',
  imports: [Metas],
  templateUrl: './listar-metas.html',
  styleUrl: './listar-metas.css',
})
export class ListarMetas implements OnInit {
  metasService = inject(MetasService);
  listaDeMetas: MetasInterfaz[];
  listaDeMetasback!: MetasInterfaz[];

  constructor() {
    this.listaDeMetas = this.metasService.obtenerMetas();
  }
  ngOnInit(): void {
    this.metasService.obtenerMetasBack().then((valorObtenido: MetasInterfaz[]) => {
      this.listaDeMetasback = valorObtenido;
    });
  }
}
