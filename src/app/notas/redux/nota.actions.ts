import { createAction, props } from '@ngrx/store';

export const crearAction = createAction(
  '[TODO] crearNota',
  props<{ texto: string }>()
);
export const toggleCompletadoAction = createAction(
  '[TODO] toggleNota',
  props<{ id: number }>()
);
export const editarAction = createAction(
  '[TODO] editarNota',
  props<{ id: number; texto: string }>()
);
export const eliminarAction = createAction(
  '[TODO] eliminarNota',
  props<{ id: number }>()
);

export const toggleAllAction = createAction(
  '[TODO] eliminarNota',
  props<{ completado: boolean }>()
);

export const limpiarAllNotasCompletadosAction = createAction(
  '[TODO] limpiar Notas All'
);
