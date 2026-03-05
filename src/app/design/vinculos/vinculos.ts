import { Component, Input } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-vinculos',
  imports: [RouterLink],
  templateUrl: './vinculos.html',
  styleUrl: './vinculos.css',
})
export class Vinculos {
  @Input()
  href: string = '';
  @Input()
  src: string = '';
  @Input()
  alt: string = 'descripcion no arrojada';
  @Input()
  texto: string = 'texto no ingresado';
}
