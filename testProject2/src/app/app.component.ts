import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestComp1Component } from './test-comp1/test-comp1.component';
import { CompLifecycleComponent } from './comp-lifecycle/comp-lifecycle.component';
 import { ViewEncapsulationComponent } from './view-encapsulation/view-encapsulation.component';
 import { InOutChildSampleComponent } from './in-out-child-sample/in-out-child-sample.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TestComp1Component,CompLifecycleComponent,ViewEncapsulationComponent,InOutChildSampleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'testProject2';
  counter = 5;
}
