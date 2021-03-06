import {Component} from '@angular/core';
import {PropertyBindingComponent} from './property-binding/property-binding.component';
import {EventBindingComponent} from './event-binding/event-binding.component';
import {TwowayBindingComponent} from './twoway-binding/twoway-binding.component';
import {CustomPropertyBindingComponent} from './property-customBinding/custom-propertyBinding.component';
import {InputComponent} from './bindings/input.component';
import {ConfirmComponent} from './bindings/confirm.component';
import {AttributeDirectiveComponent} from './directives/attribute-directives.component';
import {HighLightDirective} from './directives/highlight.directive';
import {StructuralDirectiveComponent} from './directives/structural-directives.component';
import {UnlessDirective} from './directives/unless.directive';
import {Component1Component} from './component1.component';
import {Component2Component} from './component2.component';



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
                  <p class="code">app.component.ts</p>
                    <h4 class="parents-header"> Please enter your celebrity crush name</h4>
                      <input type="text" [(ngModel)]="theName">
                      <br>    
                      <br>
                        <section class="child-component">

                          <property-custom [celebCrush]="theName" 
                                           [myAge]="23" 
                                           (theSpotsUpdate)="theSpots = $event">
                          </property-custom>

                            <p class="parent-component">a spot called: 
                              <span class="childs-header">{{theSpots}}
                                <p class="code">app.component.ts</p>
                              </span>
                            </p>

                        </section>  
                </section>
                      <br>
                      <hr>
     <h3>Input Component</h3>     
      
        <div class="container">
          <my-input (submittedCustom)="onSubmit($event)" [myself]="confirmMyself"></my-input>


        </div>

        <div class="container">
          <my-confirm (confirmCustom)="onConfirm($event)" [myself]="myself"></my-confirm>
        </div>
        
        <my-attribute-directive></my-attribute-directive>
        <hr>
        <h3>Structural Directives</h3>
        <my-structural-directive></my-structural-directive>
        <hr>
        
        <h2>Services</h2>
        
        <section class="component-1">
        
          <h3>Component 1</h3>
          <component-1></component-1>
        
        </section>

           <h3>Component 2</h3>
          <component-2></component-2>



    `,

  directives: [PropertyBindingComponent, 
               EventBindingComponent, 
               TwowayBindingComponent, 
               CustomPropertyBindingComponent, 
               InputComponent, ConfirmComponent, 
               AttributeDirectiveComponent,
               HighLightDirective,
               StructuralDirectiveComponent,
               UnlessDirective,
               Component1Component,
               Component2Component,
               ]

})

export class AppComponent {

  //input-component objects
  myself = {
    name: '',
    age: ''
  };

  confirmMyself = {
    name: '',
    age: ''
  };

  //submit the data from the input-component
  onSubmit(myself: {name: string, age: string}) {
    this.myself = { name: myself.name, age: myself.age });

  }

  //check the data
  onConfirm(myself: { name: string, age: string }) {
    this.confirmMyself = { name: myself.name, age: myself.age });

  }

  //parent-chid
  theName = '';
  theSpots = '';

  myTest() {
    return 3 === 1;
  }
  //from first binding
  name = 'Abel Boi';

}

