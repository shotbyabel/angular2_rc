import {Component} from '@angular/core';
import {LoggingService} from './services/logging.service';
import {CalculatorService} from './services/calculator.service';
import {DataService} from './services/data.service';

@Component({
    selector: 'component-1',
    template: `


    <div>
        <h4>Logging Service</h4>
        <input type="text" #message>
            <button (click)="onLog(message.value)">SEND</button>
    </div>

    <section class="calculator-data">
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
           <hr>     
    </div>
    </section>       
    <section class="house-data">
                <input type="text" #newHouseData>
                <button (click)="onHouseInsert(newHouseData.value)">insert house</button>

    <div>
        <h3>Data Service</h3>
            <button (click)="onGetHouseData()">Get House Data</button>
                <br>
                <p>{{houseData}}</p>
                
    </div>        
    </section>

    `,
    providers: [LoggingService, CalculatorService, DataService]
})

export class Component1Component {

    result: string;
    houseData: string;//line 39

    constructor(private _loggingService: LoggingService, 
                private _calculatorService: CalculatorService,
                private _dataService: DataService) {}

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

//data.service click events
onGetHouseData(){
    this.houseData = this._dataService.getRandomHouse();
}
// insert newHouseData
onHouseInsert(value: string){
    this._dataService.insert(value);
}


}