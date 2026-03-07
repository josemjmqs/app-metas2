import { Component, Input, OnInit } from '@angular/core';
import { MetasInterfaz } from '../../core/models/metas';
import { Router } from '@angular/router';

@Component({
  selector: 'app-metas',
  imports: [],
  templateUrl: './metas.html',
  styleUrl: './metas.css',
})
export class Metas implements OnInit {
  @Input()
  meta!: MetasInterfaz;
  alcanzado!: number;
  constructor(private router: Router) {}
  ngOnInit(): void {
    this.alcanzado = (this.meta.completado / this.meta.meta) * 100;
  }
  editarMeta(meta: MetasInterfaz) {
    const queryParams = JSON.stringify(meta)
    this.router.navigate(['/editar'], {queryParams: {meta: queryParams}})
  }
}
