import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  imports: [],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  txtStatic: String = "GeeksforGeeks";
  dynamicVal = 'initial input';
  image ="https://media.geeksforgeeks.org/wp-content/uploads/geeksforgeeks-6.png";

}
