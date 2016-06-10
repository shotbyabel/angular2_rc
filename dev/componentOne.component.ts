import {Component} from '@angular/core';
import {LoggingService} from "./services/logging.service";

@Component({
  selector: 'component-one',
  template: `

    <input type="text" #message>
    <button (click)="onLog(message.value)">SEND</button>

`,
  providers: [LoggingService]
})

export class ComponentOneComponent {
  //inject our loggin service here
  constructor(private _loggingService: LoggingService) {}

  onLog(message: string){
    this._loggingService.log(message);
  }

}