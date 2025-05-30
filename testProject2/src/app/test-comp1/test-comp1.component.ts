import { Component } from '@angular/core';

@Component({
  selector: 'app-test-comp1',
  standalone: true,
  imports: [TestComp1Component],
  templateUrl: './test-comp1.component.html',
  styleUrl: './test-comp1.component.css'
})
export class TestComp1Component {

}
