import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, EwokProfile, ACTIONS } from './ewoks.reducer';
import * as Rx from 'RxJS';

@Component({
  selector: 'app-ewok-list',
  templateUrl: './ewok-list.component.html',
  styleUrls: ['./ewok-list.component.scss'],
})
export class EwokListComponent {
  public ewoks: Rx.Observable<Array<EwokProfile>>;

  constructor(private store: Store<AppState>) {
    this.ewoks = store.select('ewoks');
  }

}
