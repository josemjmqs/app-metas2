import { Component, Input, OnInit } from '@angular/core';
import { MetasInterfaz } from '../../core/models/metas';

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
  ngOnInit(): void {
    this.alcanzado = (this.meta.completado / this.meta.meta) * 100;
  }
}
