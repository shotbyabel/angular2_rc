import {Component} from '@angular/core';
import {Input} from '@angular/core';

@Component({
  selector: 'property-custom',
  template: `

<h3>Child Component</h3>
<br>
<p class="code">custom-propertyBinding.component.ts</p>
<p>Hooola {{celebCrush}} and my age is {{age}}<p>

  `,
inputs: ['name: celebCrush']

})

export class CustomPropertyBindingComponent {

  celebCrush = '';
  @Input('myAge') age = 34;

}