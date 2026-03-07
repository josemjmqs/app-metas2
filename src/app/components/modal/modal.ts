import { Component } from '@angular/core';
import { Nuevo } from '../nuevo/nuevo';
import { MetasInterfaz } from '../../core/models/metas';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modal',
  imports: [Nuevo],
  templateUrl: './modal.html',
  styleUrl: './modal.css',
})
export class Modal {
  metas: MetasInterfaz;
  constructor(private activeRouter: ActivatedRoute) {
    const queryParams = this.activeRouter.snapshot.queryParams;
    this.metas = JSON.parse(queryParams['meta']) as MetasInterfaz;
  }
}
