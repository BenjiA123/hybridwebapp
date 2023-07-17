import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  constructor() { }
  holdings = [0, 0, 0,]
  transactions: any = [0, 0, 0]

  finatialStat_money_In: any[] = [0, 0, 0, 0, 0]
  finatialStat_money_Out: any[] = [0, 0, 0, 0, 0]

  ngOnInit(): void {
  }

}
