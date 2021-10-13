import { createReducer, on } from '@ngrx/store';
import {
  crearAction,
  toggleCompletadoAction,
  editarAction,
  eliminarAction,
  toggleAllAction,
} from './nota.actions';
import { NotaClass } from '../models/nota.model';
import { limpiarAllNotasCompletadosAction } from './nota.actions';

export const initialState: NotaClass[] = [new NotaClass('primera data')];

const _notaReducer = createReducer(
  initialState,
  on(crearAction, (state, props) => /* state.push(props.texto) */ [
    ...state,
    new NotaClass(props.texto),
  ]),
  on(toggleCompletadoAction, (state, { id }) => {
    return state.map((nota) => {
      if (nota.id === id) {
        return {
          ...nota,
          completado: !nota.completado,
        };
      } else {
        return nota;
      }
    });
  }),

  on(editarAction, (state, { id, texto }) => {
    return state.map((nota) => {
      if (nota.id === id) {
        return {
          ...nota,
          // completado: !nota.completado,
          texto: texto,
        };
      } else {
        return nota;
      }
    });
  }),
  // Map y Filter devuelve otro estado por defecto
  on(eliminarAction, (state, { id }) => state.filter((nota) => nota.id !== id)),
  on(toggleAllAction, (state, { completado }) =>
    state.map((nota) => {
      return {
        ...nota,
        completado: completado,
      };
    })
  ),

  on(limpiarAllNotasCompletadosAction, (state) =>
    state.filter((nota) => !nota.completado)
  )
);

export function notaReducer(state: any, action: any) {
  return _notaReducer(state, action);
}
