import {Component} from '@angular/core';
import {PropertyBindingComponent} from './property-binding/property-binding.component';
import {EventBindingComponent} from './event-binding/event-binding.component';
import {TwowayBindingComponent} from './twoway-binding/twoway-binding.component';
import {CustomPropertyBindingComponent} from './property-customBinding/custom-propertyBinding.component';

@Component({
    selector: 'my-app',
    template: `
    <h3>String Interpolation Binding</h3>
              {{myTest()}}

              <input type ="text" value="{{name}}" class="{{'new-styles'}}">

              <property-bind></property-bind>
              <event-bind></event-bind>
              <twoway-bind></twoway-bind>
              
              <br>
              <hr>
              
              <h2>Property Binding to Custom Components</h2>
              
                <section class="parent-component">

                  <h2>Parent Component!</h2>
                    <h4> Please enter your celebrity crush name</h4>
                      <input type="text" [(ngModel)]="theName">
                        <p class="code">app.component.ts</p>
                          
                          <section class="child-component">
                            <property-custom [celebCrush]="theName" [myAge]="23"></property-custom>
                          </section>  

                 </section>
  
    `,

    directives: [PropertyBindingComponent, 
                 EventBindingComponent, 
                 TwowayBindingComponent, 
                 CustomPropertyBindingComponent
                 ]
})
export class AppComponent {

//parent-chid
  theName = '';

  myTest() {
    return 3 === 1;
  }
//from first binding
  name = 'Abel Boi';

}