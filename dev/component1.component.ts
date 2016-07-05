import {Component} from '@angular/core';
import {LoggingService} from './services/logging.service';
import {CalculatorService} from './services/calculator.service';

@Component({
    selector: 'component-1',
    template: `


    <div>
        <h4>Logging Service</h4>
        <input type="text" #message>
            <button (click)="onLog(message.value)">SEND</button>
    </div>

    <div>
        <h4>Calculator Service</h4>
            <p> Add or Multiply</p>
                <input type="text" #num1>
                <input type="text" #num2>
                <button (click)="onMultiply(num1.value, num2.value)"> X </button>
                <button (click)="onAdd(num1.value, num2.value)"> + </button>
                <br>
                <p> EQUALS: {{result}}</p>
                <button (click)="clearCalc()">CLEAR</button>
    </div>        



    `,
    providers: [LoggingService, CalculatorService]
})

export class Component1Component {

    constructor(private _loggingService: LoggingService, private _calculatorService: CalculatorService) {}

onLog(message: string){
    this._loggingService.log(message);

    }
//mult and add logic
onMultiply(num1: number, num2: number) {
    this.result = ''+this._calculatorService.multiply(+num1, +num2);//adding a "+" converts them to numbers
}

onAdd(num1: number, num2: number) {
    this.result = ''+this._calculatorService.add(+num1, +num2);
}

  clearCalc() {
    this.result = '';

  }

}