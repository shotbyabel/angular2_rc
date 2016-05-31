import {Component} from '@angular/core';
import {PropertyBindingComponent} from './property-binding/property-binding.component';
import {EventBindingComponent} from './event-binding/event-binding.component';

@Component({
    selector: 'my-app',
    template: `
    <h3>String Interpolation Binding</h3>
              {{myTest()}}

              <input type ="text" value="{{name}}" class="{{'new-styles'}}">

              <property-bind></property-bind>
              <event-bind></event-bind>
       
    `,

    directives: [PropertyBindingComponent, EventBindingComponent]
})
export class AppComponent {

  name = 'Abel Boi';

  myTest() {
    return 3 === 1;
  }

}