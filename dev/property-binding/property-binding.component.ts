import {Component} from '@angular/core';

@Component({
  selector: 'property-bind',
  template: `
<hr>
<br>
<br>
<h3>Property Binding</h3>
<br>
<p>Binding to an HTML element.</p>

              {{newTest()}}

              <input type ="text" [value]="lastName" [ngClass]="{otherStyles:true}">
              <br>
              <p>Binding to a property of a directive.</p>



  `,


})

export class PropertyBindingComponent {


  lastName = 'greatest';

  newTest() {
    return 1 === 1;
  }


}