System.register(['@angular/core', './services/logging.service', './services/calculator.service', './services/data.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, logging_service_1, calculator_service_1, data_service_1;
    var Component1Component;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (logging_service_1_1) {
                logging_service_1 = logging_service_1_1;
            },
            function (calculator_service_1_1) {
                calculator_service_1 = calculator_service_1_1;
            },
            function (data_service_1_1) {
                data_service_1 = data_service_1_1;
            }],
        execute: function() {
            Component1Component = (function () {
                function Component1Component(_loggingService, _calculatorService, _dataService) {
                    this._loggingService = _loggingService;
                    this._calculatorService = _calculatorService;
                    this._dataService = _dataService;
                }
                Component1Component.prototype.onLog = function (message) {
                    this._loggingService.log(message);
                };
                //mult and add logic
                Component1Component.prototype.onMultiply = function (num1, num2) {
                    this.result = '' + this._calculatorService.multiply(+num1, +num2); //adding a "+" converts them to numbers
                };
                Component1Component.prototype.onAdd = function (num1, num2) {
                    this.result = '' + this._calculatorService.add(+num1, +num2);
                };
                Component1Component.prototype.clearCalc = function () {
                    this.result = '';
                };
                //data.service click events
                Component1Component.prototype.onGetHouseData = function () {
                    this.houseData = this._dataService.getRandomHouse();
                };
                // insert newHouseData
                Component1Component.prototype.onHouseInsert = function (value) {
                    this._dataService.insert(value);
                };
                Component1Component = __decorate([
                    core_1.Component({
                        selector: 'component-1',
                        template: "\n\n\n    <div>\n        <h4>Logging Service</h4>\n        <input type=\"text\" #message>\n            <button (click)=\"onLog(message.value)\">SEND</button>\n    </div>\n\n    <section class=\"calculator-data\">\n    <div>\n        <h4>Calculator Service</h4>\n            <p> Add or Multiply</p>\n                <input type=\"text\" #num1>\n                <input type=\"text\" #num2>\n                <button (click)=\"onMultiply(num1.value, num2.value)\"> X </button>\n                <button (click)=\"onAdd(num1.value, num2.value)\"> + </button>\n                <br>\n                <p> EQUALS: {{result}}</p>\n                <button (click)=\"clearCalc()\">CLEAR</button>\n           <hr>     \n    </div>\n    </section>       \n    <section class=\"house-data\">\n                <input type=\"text\" #newHouseData>\n                <button (click)=\"onHouseInsert(newHouseData.value)\">insert house</button>\n\n    <div>\n        <h3>Data Service</h3>\n            <button (click)=\"onGetHouseData()\">Get House Data</button>\n                <br>\n                <p>{{houseData}}</p>\n                \n    </div>        \n    </section>\n\n    ",
                        providers: [logging_service_1.LoggingService, calculator_service_1.CalculatorService, data_service_1.DataService]
                    }), 
                    __metadata('design:paramtypes', [logging_service_1.LoggingService, calculator_service_1.CalculatorService, data_service_1.DataService])
                ], Component1Component);
                return Component1Component;
            }());
            exports_1("Component1Component", Component1Component);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudDEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBK0NBO2dCQUtJLDZCQUFvQixlQUErQixFQUMvQixrQkFBcUMsRUFDckMsWUFBeUI7b0JBRnpCLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtvQkFDL0IsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtvQkFDckMsaUJBQVksR0FBWixZQUFZLENBQWE7Z0JBQUcsQ0FBQztnQkFFckQsbUNBQUssR0FBTCxVQUFNLE9BQWU7b0JBQ2pCLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUVsQyxDQUFDO2dCQUNMLG9CQUFvQjtnQkFDcEIsd0NBQVUsR0FBVixVQUFXLElBQVksRUFBRSxJQUFZO29CQUNqQyxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsR0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQSx1Q0FBdUM7Z0JBQzNHLENBQUM7Z0JBRUQsbUNBQUssR0FBTCxVQUFNLElBQVksRUFBRSxJQUFZO29CQUM1QixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsR0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQy9ELENBQUM7Z0JBRUMsdUNBQVMsR0FBVDtvQkFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztnQkFFbkIsQ0FBQztnQkFFSCwyQkFBMkI7Z0JBQzNCLDRDQUFjLEdBQWQ7b0JBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUN4RCxDQUFDO2dCQUNELHNCQUFzQjtnQkFDdEIsMkNBQWEsR0FBYixVQUFjLEtBQWE7b0JBQ3ZCLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNwQyxDQUFDO2dCQTVFRDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxhQUFhO3dCQUN2QixRQUFRLEVBQUUsMm9DQW9DVDt3QkFDRCxTQUFTLEVBQUUsQ0FBQyxnQ0FBYyxFQUFFLHNDQUFpQixFQUFFLDBCQUFXLENBQUM7cUJBQzlELENBQUM7O3VDQUFBO2dCQXVDRiwwQkFBQztZQUFELENBckNBLEFBcUNDLElBQUE7WUFyQ0QscURBcUNDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50MS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0xvZ2dpbmdTZXJ2aWNlfSBmcm9tICcuL3NlcnZpY2VzL2xvZ2dpbmcuc2VydmljZSc7XG5pbXBvcnQge0NhbGN1bGF0b3JTZXJ2aWNlfSBmcm9tICcuL3NlcnZpY2VzL2NhbGN1bGF0b3Iuc2VydmljZSc7XG5pbXBvcnQge0RhdGFTZXJ2aWNlfSBmcm9tICcuL3NlcnZpY2VzL2RhdGEuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnY29tcG9uZW50LTEnLFxuICAgIHRlbXBsYXRlOiBgXG5cblxuICAgIDxkaXY+XG4gICAgICAgIDxoND5Mb2dnaW5nIFNlcnZpY2U8L2g0PlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAjbWVzc2FnZT5cbiAgICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cIm9uTG9nKG1lc3NhZ2UudmFsdWUpXCI+U0VORDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJjYWxjdWxhdG9yLWRhdGFcIj5cbiAgICA8ZGl2PlxuICAgICAgICA8aDQ+Q2FsY3VsYXRvciBTZXJ2aWNlPC9oND5cbiAgICAgICAgICAgIDxwPiBBZGQgb3IgTXVsdGlwbHk8L3A+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI251bTE+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI251bTI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwib25NdWx0aXBseShudW0xLnZhbHVlLCBudW0yLnZhbHVlKVwiPiBYIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cIm9uQWRkKG51bTEudmFsdWUsIG51bTIudmFsdWUpXCI+ICsgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgICAgIDxwPiBFUVVBTFM6IHt7cmVzdWx0fX08L3A+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwiY2xlYXJDYWxjKClcIj5DTEVBUjwvYnV0dG9uPlxuICAgICAgICAgICA8aHI+ICAgICBcbiAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+ICAgICAgIFxuICAgIDxzZWN0aW9uIGNsYXNzPVwiaG91c2UtZGF0YVwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICNuZXdIb3VzZURhdGE+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwib25Ib3VzZUluc2VydChuZXdIb3VzZURhdGEudmFsdWUpXCI+aW5zZXJ0IGhvdXNlPC9idXR0b24+XG5cbiAgICA8ZGl2PlxuICAgICAgICA8aDM+RGF0YSBTZXJ2aWNlPC9oMz5cbiAgICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cIm9uR2V0SG91c2VEYXRhKClcIj5HZXQgSG91c2UgRGF0YTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgICAgICA8cD57e2hvdXNlRGF0YX19PC9wPlxuICAgICAgICAgICAgICAgIFxuICAgIDwvZGl2PiAgICAgICAgXG4gICAgPC9zZWN0aW9uPlxuXG4gICAgYCxcbiAgICBwcm92aWRlcnM6IFtMb2dnaW5nU2VydmljZSwgQ2FsY3VsYXRvclNlcnZpY2UsIERhdGFTZXJ2aWNlXVxufSlcblxuZXhwb3J0IGNsYXNzIENvbXBvbmVudDFDb21wb25lbnQge1xuXG4gICAgcmVzdWx0OiBzdHJpbmc7XG4gICAgaG91c2VEYXRhOiBzdHJpbmc7Ly9saW5lIDM5XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9sb2dnaW5nU2VydmljZTogTG9nZ2luZ1NlcnZpY2UsIFxuICAgICAgICAgICAgICAgIHByaXZhdGUgX2NhbGN1bGF0b3JTZXJ2aWNlOiBDYWxjdWxhdG9yU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9kYXRhU2VydmljZTogRGF0YVNlcnZpY2UpIHt9XG5cbm9uTG9nKG1lc3NhZ2U6IHN0cmluZyl7XG4gICAgdGhpcy5fbG9nZ2luZ1NlcnZpY2UubG9nKG1lc3NhZ2UpO1xuXG4gICAgfVxuLy9tdWx0IGFuZCBhZGQgbG9naWNcbm9uTXVsdGlwbHkobnVtMTogbnVtYmVyLCBudW0yOiBudW1iZXIpIHtcbiAgICB0aGlzLnJlc3VsdCA9ICcnK3RoaXMuX2NhbGN1bGF0b3JTZXJ2aWNlLm11bHRpcGx5KCtudW0xLCArbnVtMik7Ly9hZGRpbmcgYSBcIitcIiBjb252ZXJ0cyB0aGVtIHRvIG51bWJlcnNcbn1cblxub25BZGQobnVtMTogbnVtYmVyLCBudW0yOiBudW1iZXIpIHtcbiAgICB0aGlzLnJlc3VsdCA9ICcnK3RoaXMuX2NhbGN1bGF0b3JTZXJ2aWNlLmFkZCgrbnVtMSwgK251bTIpO1xufVxuXG4gIGNsZWFyQ2FsYygpIHtcbiAgICB0aGlzLnJlc3VsdCA9ICcnO1xuXG4gIH1cblxuLy9kYXRhLnNlcnZpY2UgY2xpY2sgZXZlbnRzXG5vbkdldEhvdXNlRGF0YSgpe1xuICAgIHRoaXMuaG91c2VEYXRhID0gdGhpcy5fZGF0YVNlcnZpY2UuZ2V0UmFuZG9tSG91c2UoKTtcbn1cbi8vIGluc2VydCBuZXdIb3VzZURhdGFcbm9uSG91c2VJbnNlcnQodmFsdWU6IHN0cmluZyl7XG4gICAgdGhpcy5fZGF0YVNlcnZpY2UuaW5zZXJ0KHZhbHVlKTtcbn1cblxuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
