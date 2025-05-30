import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestComp1Component } from './test-comp1/test-comp1.component';
import { CompLifecycleComponent } from './comp-lifecycle/comp-lifecycle.component';
 import { ViewEncapsulationComponent } from './view-encapsulation/view-encapsulation.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TestComp1Component,CompLifecycleComponent,ViewEncapsulationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'testProject2';
}
