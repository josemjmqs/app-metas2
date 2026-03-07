import { Injectable } from '@angular/core';
import { MetasInterfaz } from '../core/models/metas';

@Injectable({
  providedIn: 'root',
})
export class Backend {
  private readonly archivoLocalMetas = 'public/data/metas.json';
  private readonly archivoLocalMeta = 'public/data/meta.json';

  constructor() {}

  async leerMetas(): Promise<MetasInterfaz[]> {
    const response = await fetch(this.archivoLocalMetas);
    const metas: MetasInterfaz[] = await response.json();
    return metas;
  }
  async pedirMetaPorId(id: number): Promise<MetasInterfaz> {
    const response = await fetch(this.archivoLocalMeta);
    const meta: MetasInterfaz = await response.json();
    return meta;
  }
}
