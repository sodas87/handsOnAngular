import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-comp-lifecycle',
  imports: [CompLifecycleComponent],
  templateUrl: './comp-lifecycle.component.html',
  styleUrl: './comp-lifecycle.component.css'
})
export class CompLifecycleComponent implements OnInit, OnChanges {
  ngOnInit(): void {
console.log("Component initialize");
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("change detected");
  }

   ngDoCheck() {
      console.log("Custom change detection")
   }
   
   ngAfterContentInit() {
      console.log("Content initialization")
   }
   
   ngAfterContentChecked() {
      console.log("Checking changes in content")
   }
   
   ngAfterViewInit() {
      console.log("View initialization")
   }
   
   ngAfterViewChecked() {
      console.log("Checking changes in views")
   }
   
   ngOnDestroy() {
      console.log("Destruction of component / directive")
   }

}
