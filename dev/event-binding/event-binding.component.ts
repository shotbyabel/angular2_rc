import {Component} from '@angular/core';

@Component({
  selector: 'event-bind',
  template: `
<hr>
<br>
<br>
<h3>Event Binding</h3>
<br>
<p>Binding to events.</p>


              {{eventTest()}}

              <input type ="text" [value]="" [ngClass]="{eventStyles:true}" (keyup)="onKeyup(inputElement.value)" #inputElement>
              <br>
              <p>{{values}}</p>


  `,


})

export class EventBindingComponent {


  nickName = '';
  values = '';

  eventTest() {
    return 0 === 0;
  }

  onKeyup(value: string) {
    this.values += value + ' | ';
  }


}