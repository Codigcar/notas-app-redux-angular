import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStateI } from '../redux/app.reducer';
import * as actions from '../redux/nota.actions';

@Component({
  selector: 'app-nota-page',
  templateUrl: './nota-page.component.html',
  styleUrls: ['./nota-page.component.scss'],
})
export class NotaPageComponent implements OnInit {
  public completado: boolean = false;

  constructor(private store: Store<AppStateI>) {}

  ngOnInit(): void {}

  public toggleAll() {
    this.completado = !this.completado;
    this.store.dispatch(
      actions.toggleAllAction({ completado: this.completado })
    );
  }
}
