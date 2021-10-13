import { ActionReducerMap } from '@ngrx/store';
import { NotaClass } from '../models/nota.model';
import { notaReducer } from './nota.reducer';
import { filtrosValidos } from './filtro.actions';
import { filtroReducer } from './filtro.reducer';

export interface AppStateI {
  notas: NotaClass[];
  filtro: filtrosValidos;
}

export const appReducers: ActionReducerMap<AppStateI> = {
  notas: notaReducer,
  filtro: filtroReducer,
};
