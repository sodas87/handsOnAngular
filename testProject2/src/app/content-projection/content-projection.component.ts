import { Component } from '@angular/core';
import { CustomCardComponent } from './custom-card/custom-card.component';



@Component({
  selector: 'app-content-projection',
  imports: [CustomCardComponent],
  templateUrl: './content-projection.component.html',
  styleUrl: './content-projection.component.css'
})
export class ContentProjectionComponent {

}
