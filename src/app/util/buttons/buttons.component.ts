import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {

  constructor() { }
  @Input() btn_text: string = '';
  @Input() button_type: string = '';
  @Input() styles: {} = {};
  @Input() click: string = '';
  @Output() mclick = new EventEmitter();

  ngOnInit(): void {
  }

  // click() {
  //   // if (!(this.disabled || !this.valid))
  //   this.mclick.emit();
  // }
}
