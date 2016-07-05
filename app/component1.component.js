System.register(['@angular/core', './services/logging.service', './services/calculator.service'], function(exports_1, context_1) {
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
    var core_1, logging_service_1, calculator_service_1;
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
            }],
        execute: function() {
            Component1Component = (function () {
                function Component1Component(_loggingService, _calculatorService) {
                    this._loggingService = _loggingService;
                    this._calculatorService = _calculatorService;
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
                Component1Component = __decorate([
                    core_1.Component({
                        selector: 'component-1',
                        template: "\n\n\n    <div>\n        <h4>Logging Service</h4>\n        <input type=\"text\" #message>\n            <button (click)=\"onLog(message.value)\">SEND</button>\n    </div>\n\n    <div>\n        <h4>Calculator Service</h4>\n            <p> Add or Multiply</p>\n                <input type=\"text\" #num1>\n                <input type=\"text\" #num2>\n                <button (click)=\"onMultiply(num1.value, num2.value)\"> X </button>\n                <button (click)=\"onAdd(num1.value, num2.value)\"> + </button>\n                <br>\n                <p> EQUALS: {{result}}</p>\n                <button (click)=\"clearCalc()\">CLEAR</button>\n    </div>        \n\n\n\n    ",
                        providers: [logging_service_1.LoggingService, calculator_service_1.CalculatorService]
                    }), 
                    __metadata('design:paramtypes', [logging_service_1.LoggingService, calculator_service_1.CalculatorService])
                ], Component1Component);
                return Component1Component;
            }());
            exports_1("Component1Component", Component1Component);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudDEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBaUNBO2dCQUVJLDZCQUFvQixlQUErQixFQUFVLGtCQUFxQztvQkFBOUUsb0JBQWUsR0FBZixlQUFlLENBQWdCO29CQUFVLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7Z0JBQUcsQ0FBQztnQkFFMUcsbUNBQUssR0FBTCxVQUFNLE9BQWU7b0JBQ2pCLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUVsQyxDQUFDO2dCQUNMLG9CQUFvQjtnQkFDcEIsd0NBQVUsR0FBVixVQUFXLElBQVksRUFBRSxJQUFZO29CQUNqQyxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsR0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQSx1Q0FBdUM7Z0JBQzNHLENBQUM7Z0JBRUQsbUNBQUssR0FBTCxVQUFNLElBQVksRUFBRSxJQUFZO29CQUM1QixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsR0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQy9ELENBQUM7Z0JBRUMsdUNBQVMsR0FBVDtvQkFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztnQkFFbkIsQ0FBQztnQkFqREg7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsYUFBYTt3QkFDdkIsUUFBUSxFQUFFLG1xQkF1QlQ7d0JBQ0QsU0FBUyxFQUFFLENBQUMsZ0NBQWMsRUFBRSxzQ0FBaUIsQ0FBQztxQkFDakQsQ0FBQzs7dUNBQUE7Z0JBd0JGLDBCQUFDO1lBQUQsQ0F0QkEsQUFzQkMsSUFBQTtZQXRCRCxxREFzQkMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnQxLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TG9nZ2luZ1NlcnZpY2V9IGZyb20gJy4vc2VydmljZXMvbG9nZ2luZy5zZXJ2aWNlJztcbmltcG9ydCB7Q2FsY3VsYXRvclNlcnZpY2V9IGZyb20gJy4vc2VydmljZXMvY2FsY3VsYXRvci5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdjb21wb25lbnQtMScsXG4gICAgdGVtcGxhdGU6IGBcblxuXG4gICAgPGRpdj5cbiAgICAgICAgPGg0PkxvZ2dpbmcgU2VydmljZTwvaDQ+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICNtZXNzYWdlPlxuICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwib25Mb2cobWVzc2FnZS52YWx1ZSlcIj5TRU5EPC9idXR0b24+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2PlxuICAgICAgICA8aDQ+Q2FsY3VsYXRvciBTZXJ2aWNlPC9oND5cbiAgICAgICAgICAgIDxwPiBBZGQgb3IgTXVsdGlwbHk8L3A+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI251bTE+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI251bTI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwib25NdWx0aXBseShudW0xLnZhbHVlLCBudW0yLnZhbHVlKVwiPiBYIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cIm9uQWRkKG51bTEudmFsdWUsIG51bTIudmFsdWUpXCI+ICsgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgICAgIDxwPiBFUVVBTFM6IHt7cmVzdWx0fX08L3A+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwiY2xlYXJDYWxjKClcIj5DTEVBUjwvYnV0dG9uPlxuICAgIDwvZGl2PiAgICAgICAgXG5cblxuXG4gICAgYCxcbiAgICBwcm92aWRlcnM6IFtMb2dnaW5nU2VydmljZSwgQ2FsY3VsYXRvclNlcnZpY2VdXG59KVxuXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50MUNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9sb2dnaW5nU2VydmljZTogTG9nZ2luZ1NlcnZpY2UsIHByaXZhdGUgX2NhbGN1bGF0b3JTZXJ2aWNlOiBDYWxjdWxhdG9yU2VydmljZSkge31cblxub25Mb2cobWVzc2FnZTogc3RyaW5nKXtcbiAgICB0aGlzLl9sb2dnaW5nU2VydmljZS5sb2cobWVzc2FnZSk7XG5cbiAgICB9XG4vL211bHQgYW5kIGFkZCBsb2dpY1xub25NdWx0aXBseShudW0xOiBudW1iZXIsIG51bTI6IG51bWJlcikge1xuICAgIHRoaXMucmVzdWx0ID0gJycrdGhpcy5fY2FsY3VsYXRvclNlcnZpY2UubXVsdGlwbHkoK251bTEsICtudW0yKTsvL2FkZGluZyBhIFwiK1wiIGNvbnZlcnRzIHRoZW0gdG8gbnVtYmVyc1xufVxuXG5vbkFkZChudW0xOiBudW1iZXIsIG51bTI6IG51bWJlcikge1xuICAgIHRoaXMucmVzdWx0ID0gJycrdGhpcy5fY2FsY3VsYXRvclNlcnZpY2UuYWRkKCtudW0xLCArbnVtMik7XG59XG5cbiAgY2xlYXJDYWxjKCkge1xuICAgIHRoaXMucmVzdWx0ID0gJyc7XG5cbiAgfVxuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
