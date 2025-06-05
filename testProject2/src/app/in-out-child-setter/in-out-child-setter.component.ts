import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-in-out-child-setter',
  imports: [],
  templateUrl: './in-out-child-setter.component.html',
  styleUrl: './in-out-child-setter.component.css'
})
export class InOutChildSetterComponent {
  @Input()
   get counter(): number { return this._counter; }
   set counter(val: number) {
      this._counter = val || 0;
      if(val > 25) this._counter = val % 25;
   }
   private _counter: number = 1;

}
