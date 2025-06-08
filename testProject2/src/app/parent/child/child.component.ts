import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styles: ' div { border: 1px solid green; border-radius: 25px; padding: 16px 32px; } '

})
export class ChildComponent {
 @Input() messageFromParent: string = '';
}
