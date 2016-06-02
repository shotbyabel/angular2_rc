import {Component, EventEmitter} from '@angular/core';
import {Input} from '@angular/core';

@Component({
  selector: 'property-custom',
  template: `

  <h3>Child Component</h3>
    <p class="code">custom-propertyBinding.component.ts</p>
      <p>Hola! <span class="parents-header">{{celebCrush}}</span> and my age is {{age}}<p>
       
       <h4 class="childs-header">Spots I want to take them</h4>
          <input type="text" (keyup)="onThespotsUpdate(spots.value)" #spots>
      
  `,

  inputs: ['celebCrush'],
  outputs: ['theSpotsUpdate']

})

export class CustomPropertyBindingComponent {

  celebCrush = '';
  @Input('myAge') age = 34;
  theSpotsUpdate = new EventEmitter<string>();

  onThespotsUpdate(spots: string) {
    this.theSpotsUpdate.emit(spots);

  }

}
