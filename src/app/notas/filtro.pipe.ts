import { Pipe, PipeTransform } from '@angular/core';
import { NotaClass } from './models/nota.model';
import { filtrosValidos } from './redux/filtro.actions';

@Pipe({
  name: 'filtroPipe',
})
export class FiltroPipe implements PipeTransform {
  transform(notas: NotaClass[], filtro: filtrosValidos): NotaClass[] {
    switch (filtro) {
      case 'completados':
        return notas.filter((nota) => nota.completado);

      case 'pendientes':
        return notas.filter((nota) => !nota.completado);

      default:
        return notas;
    }
  }
}
