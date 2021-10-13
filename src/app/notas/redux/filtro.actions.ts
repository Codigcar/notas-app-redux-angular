import { createAction, props } from '@ngrx/store';

export type filtrosValidos = 'todos' | 'completados' | 'pendientes';

export const setFiltroAction = createAction(
  '[Filtro] Set Filtro',
  props<{ filtro: any /* filtrosValidos */ }>()
);

export function limpiarNotasAllAction(limpiarNotasAllAction: any) {
  throw new Error('Function not implemented.');
}
