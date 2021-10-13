import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStateI } from '../redux/app.reducer';
import * as actions from '../redux/filtro.actions';
import { limpiarAllNotasCompletadosAction } from '../redux/nota.actions';

@Component({
  selector: 'app-nota-footer',
  templateUrl: './nota-footer.component.html',
  styleUrls: ['./nota-footer.component.scss'],
})
export class NotaFooterComponent implements OnInit {
  public filtroActual: actions.filtrosValidos = 'todos';
  public filtros: actions.filtrosValidos[] = [
    'todos',
    'completados',
    'pendientes',
  ];

  public pendientes: number = 0;

  constructor(private store: Store<AppStateI>) {}

  ngOnInit(): void {
    // this.store
    //   .select('filtro')
    //   .subscribe((filtro) => (this.filtroActual = filtro));

    this.store.subscribe((stateRedux) => {
      this.filtroActual = stateRedux.filtro;
      this.pendientes = stateRedux.notas.filter(
        (nota) => !nota.completado
      ).length;
    });
  }

  public cambiarFiltro(filtro: actions.filtrosValidos) {
    console.log('filtroActual: ', filtro);
    this.store.dispatch(actions.setFiltroAction({ filtro: filtro }));
  }

  public limpiarCompletados() {
    this.store.dispatch(limpiarAllNotasCompletadosAction());
  }
}
