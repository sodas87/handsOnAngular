import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-in-out-child-setter',
  imports: [],
  templateUrl: './in-out-child-setter.component.html',
  styleUrl: './in-out-child-setter.component.css'
})
export class InOutChildSetterComponent {
  @Input()
   get counterS(): number { return this._counter; }
   set counterS(val: number) {
      this._counter = val || 0;
      if(val > 10) this._counter = val % 10;
   }
   private _counter: number = 1;

}
