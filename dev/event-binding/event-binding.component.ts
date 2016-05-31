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

  `,


})

export class EventBindingComponent {


  nickName = 'kimono';

  coolTest() {
    return 0 === 8;
  }


}