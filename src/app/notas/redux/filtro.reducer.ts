import { createReducer, on } from '@ngrx/store';
import { filtrosValidos, setFiltroAction } from './filtro.actions';

export const initialState: filtrosValidos = 'todos';

const _filtroReducer = createReducer(
  initialState,
  on(setFiltroAction, (state, { filtro }) => filtro)
);

export function filtroReducer(state: any, action: any) {
  return _filtroReducer(state, action);
}
