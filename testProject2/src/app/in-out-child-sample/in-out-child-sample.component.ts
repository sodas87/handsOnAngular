import { NgFor } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-in-out-child-sample',
  imports: [NgFor],
  // template: ` <p>Changes Log:</p>
  //    <ul>
  //     <li *ngFor="let log of changesLog">{{ log }}</li>
  //   </ul>`,
 templateUrl: './in-out-child-sample.component.html',
  styleUrl: './in-out-child-sample.component.css'
})
export class InOutChildSampleComponent implements OnChanges {
  @Input() counter:number=0;
  changesLog: string[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    
   for (const key in changes) {
      const prop = changes[key];
      
      const prevVal = prop.previousValue
      const currentVal = prop.currentValue
      var isFirstChange = prop.isFirstChange()
      
      if (isFirstChange) {
         console.log("The current value is"+currentVal);
         this.changesLog.push("The current value is "+currentVal);
      } else {
         console.log(`${key} changed from `+ prevVal +" to " +currentVal);
         this.changesLog.push(`${key} changed from `+ prevVal +" to " +currentVal);
      }
   
   }
  }


}
