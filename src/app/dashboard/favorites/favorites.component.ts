import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InvestComponent } from '../dialogs/invest/invest.component';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  constructor(private _dialog: MatDialog) { }
  favorite_properties = [1, 1, 1, 1, 1, 11, 1, 1]
  ngOnInit(): void {
  }

  investDialog() {
    this._dialog.open(InvestComponent, {
      width: '410px',
      height: '610px',
    })
  }
}

