import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss']
})
export class InputsComponent implements OnInit {

  constructor() { }
  @Input() placeholder: string = '';
  @Input() required: boolean = false;
  @Input() id: string = '';
  @Input() readonly: string = '';
  @Input() name: string = '';
  @Input() input_type: string = '';

  ngOnInit(): void {
  }


  change(e: any) {
    console.log(e)
  }
}
