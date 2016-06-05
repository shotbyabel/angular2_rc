import {Component} from '@angular/core';
import {HighLightDirective} from './highlight.directive';

@Component({
  selector: 'my-attribute-directive',
  template: `

    <div [myHighLight]="'red'">
        I am supposed to be RED
    </div>

    <div [myHighLight]="'blue'">
    I am supposed to be BLUE...
    </div>

  `,
  directives: [HighLightDirective]
})


export class AttributeDirectiveComponent {

}