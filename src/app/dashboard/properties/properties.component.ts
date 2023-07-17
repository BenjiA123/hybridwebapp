import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.scss']
})
export class PropertiesComponent implements OnInit {

  constructor() { }
  properties = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,]
  ngOnInit(): void {
  }

}
