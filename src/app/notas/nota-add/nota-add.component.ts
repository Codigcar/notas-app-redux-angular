import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppStateI } from '../redux/app.reducer';
import * as actions from '../redux/nota.actions';

@Component({
  selector: 'app-nota-add',
  templateUrl: './nota-add.component.html',
  styles: [
  ]
})
export class NotaAddComponent implements OnInit {

  txtInput: FormControl;

  constructor(private store: Store<AppStateI>) {
    this.txtInput = new FormControl('', Validators.required);
  }

  ngOnInit(): void {
  }

  public agregar(){
    if(this.txtInput.invalid){
      return;
    }
    this.store.dispatch(actions.crearAction({texto: this.txtInput.value}));
    this.txtInput.reset();
  }
}
