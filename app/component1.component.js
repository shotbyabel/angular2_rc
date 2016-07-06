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
                Component1Component = __decorate([
                    core_1.Component({
                        selector: 'component-1',
                        template: "\n\n\n    <div>\n        <h4>Logging Service</h4>\n        <input type=\"text\" #message>\n            <button (click)=\"onLog(message.value)\">SEND</button>\n    </div>\n\n    <div>\n        <h4>Calculator Service</h4>\n            <p> Add or Multiply</p>\n                <input type=\"text\" #num1>\n                <input type=\"text\" #num2>\n                <button (click)=\"onMultiply(num1.value, num2.value)\"> X </button>\n                <button (click)=\"onAdd(num1.value, num2.value)\"> + </button>\n                <br>\n                <p> EQUALS: {{result}}</p>\n                <button (click)=\"clearCalc()\">CLEAR</button>\n           <hr>     \n\n                <input type=\"text\" #newHouseData>\n                <button (click)=\"onInsert(newHouseData.value)\">insert house</button>\n    </div>\n    <div>\n        <h3>Data Service</h3>\n            <button (click)=\"onGetHouseData()\">Get House Data</button>\n                <p>{{houseData}}</p>\n    </div>        \n\n    ",
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudDEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBeUNBO2dCQUtJLDZCQUFvQixlQUErQixFQUMvQixrQkFBcUMsRUFDckMsWUFBeUI7b0JBRnpCLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtvQkFDL0IsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtvQkFDckMsaUJBQVksR0FBWixZQUFZLENBQWE7Z0JBQUcsQ0FBQztnQkFFckQsbUNBQUssR0FBTCxVQUFNLE9BQWU7b0JBQ2pCLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUVsQyxDQUFDO2dCQUNMLG9CQUFvQjtnQkFDcEIsd0NBQVUsR0FBVixVQUFXLElBQVksRUFBRSxJQUFZO29CQUNqQyxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsR0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQSx1Q0FBdUM7Z0JBQzNHLENBQUM7Z0JBRUQsbUNBQUssR0FBTCxVQUFNLElBQVksRUFBRSxJQUFZO29CQUM1QixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsR0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQy9ELENBQUM7Z0JBRUMsdUNBQVMsR0FBVDtvQkFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztnQkFFbkIsQ0FBQztnQkFFSCwyQkFBMkI7Z0JBQzNCLDRDQUFjLEdBQWQ7b0JBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUN4RCxDQUFDO2dCQWxFRDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxhQUFhO3dCQUN2QixRQUFRLEVBQUUsMCtCQThCVDt3QkFDRCxTQUFTLEVBQUUsQ0FBQyxnQ0FBYyxFQUFFLHNDQUFpQixFQUFFLDBCQUFXLENBQUM7cUJBQzlELENBQUM7O3VDQUFBO2dCQXFDRiwwQkFBQztZQUFELENBbkNBLEFBbUNDLElBQUE7WUFuQ0QscURBbUNDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50MS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0xvZ2dpbmdTZXJ2aWNlfSBmcm9tICcuL3NlcnZpY2VzL2xvZ2dpbmcuc2VydmljZSc7XG5pbXBvcnQge0NhbGN1bGF0b3JTZXJ2aWNlfSBmcm9tICcuL3NlcnZpY2VzL2NhbGN1bGF0b3Iuc2VydmljZSc7XG5pbXBvcnQge0RhdGFTZXJ2aWNlfSBmcm9tICcuL3NlcnZpY2VzL2RhdGEuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnY29tcG9uZW50LTEnLFxuICAgIHRlbXBsYXRlOiBgXG5cblxuICAgIDxkaXY+XG4gICAgICAgIDxoND5Mb2dnaW5nIFNlcnZpY2U8L2g0PlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAjbWVzc2FnZT5cbiAgICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cIm9uTG9nKG1lc3NhZ2UudmFsdWUpXCI+U0VORDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdj5cbiAgICAgICAgPGg0PkNhbGN1bGF0b3IgU2VydmljZTwvaDQ+XG4gICAgICAgICAgICA8cD4gQWRkIG9yIE11bHRpcGx5PC9wPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICNudW0xPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICNudW0yPlxuICAgICAgICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cIm9uTXVsdGlwbHkobnVtMS52YWx1ZSwgbnVtMi52YWx1ZSlcIj4gWCA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIChjbGljayk9XCJvbkFkZChudW0xLnZhbHVlLCBudW0yLnZhbHVlKVwiPiArIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgICAgICA8cD4gRVFVQUxTOiB7e3Jlc3VsdH19PC9wPlxuICAgICAgICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cImNsZWFyQ2FsYygpXCI+Q0xFQVI8L2J1dHRvbj5cbiAgICAgICAgICAgPGhyPiAgICAgXG5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAjbmV3SG91c2VEYXRhPlxuICAgICAgICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cIm9uSW5zZXJ0KG5ld0hvdXNlRGF0YS52YWx1ZSlcIj5pbnNlcnQgaG91c2U8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2PlxuICAgICAgICA8aDM+RGF0YSBTZXJ2aWNlPC9oMz5cbiAgICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cIm9uR2V0SG91c2VEYXRhKClcIj5HZXQgSG91c2UgRGF0YTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxwPnt7aG91c2VEYXRhfX08L3A+XG4gICAgPC9kaXY+ICAgICAgICBcblxuICAgIGAsXG4gICAgcHJvdmlkZXJzOiBbTG9nZ2luZ1NlcnZpY2UsIENhbGN1bGF0b3JTZXJ2aWNlLCBEYXRhU2VydmljZV1cbn0pXG5cbmV4cG9ydCBjbGFzcyBDb21wb25lbnQxQ29tcG9uZW50IHtcblxuICAgIHJlc3VsdDogc3RyaW5nO1xuICAgIGhvdXNlRGF0YTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfbG9nZ2luZ1NlcnZpY2U6IExvZ2dpbmdTZXJ2aWNlLCBcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9jYWxjdWxhdG9yU2VydmljZTogQ2FsY3VsYXRvclNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfZGF0YVNlcnZpY2U6IERhdGFTZXJ2aWNlKSB7fVxuXG5vbkxvZyhtZXNzYWdlOiBzdHJpbmcpe1xuICAgIHRoaXMuX2xvZ2dpbmdTZXJ2aWNlLmxvZyhtZXNzYWdlKTtcblxuICAgIH1cbi8vbXVsdCBhbmQgYWRkIGxvZ2ljXG5vbk11bHRpcGx5KG51bTE6IG51bWJlciwgbnVtMjogbnVtYmVyKSB7XG4gICAgdGhpcy5yZXN1bHQgPSAnJyt0aGlzLl9jYWxjdWxhdG9yU2VydmljZS5tdWx0aXBseSgrbnVtMSwgK251bTIpOy8vYWRkaW5nIGEgXCIrXCIgY29udmVydHMgdGhlbSB0byBudW1iZXJzXG59XG5cbm9uQWRkKG51bTE6IG51bWJlciwgbnVtMjogbnVtYmVyKSB7XG4gICAgdGhpcy5yZXN1bHQgPSAnJyt0aGlzLl9jYWxjdWxhdG9yU2VydmljZS5hZGQoK251bTEsICtudW0yKTtcbn1cblxuICBjbGVhckNhbGMoKSB7XG4gICAgdGhpcy5yZXN1bHQgPSAnJztcblxuICB9XG5cbi8vZGF0YS5zZXJ2aWNlIGNsaWNrIGV2ZW50c1xub25HZXRIb3VzZURhdGEoKXtcbiAgICB0aGlzLmhvdXNlRGF0YSA9IHRoaXMuX2RhdGFTZXJ2aWNlLmdldFJhbmRvbUhvdXNlKCk7XG59XG5cblxuXG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
