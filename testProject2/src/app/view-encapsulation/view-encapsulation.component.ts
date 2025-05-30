import { ViewEncapsulation } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-view-encapsulation',
  standalone: true,
  imports: [ViewEncapsulationComponent],
  templateUrl: './view-encapsulation.component.html',
  styleUrl: './view-encapsulation.component.css',
  encapsulation: ViewEncapsulation.Emulated
})
export class ViewEncapsulationComponent {

}
