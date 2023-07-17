import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WithdrawComponent } from '../dialogs/withdraw/withdraw.component';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit {

  constructor(private _dialog: MatDialog) { }
  wallet_transactions: any = [0, 0, 0, 0, 0, 0, 0, 0, 0]


  ngOnInit(): void {
  }

  withdraw() {
    this._dialog.open(WithdrawComponent, {
      width: '410px',
      height: '610px',
    })
  }

}
