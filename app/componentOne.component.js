System.register(['@angular/core', "./services/logging.service", "./services/calculator.service"], function(exports_1, context_1) {
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
    var ComponentOneComponent;
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
            ComponentOneComponent = (function () {
                //inject our loggin service here
                function ComponentOneComponent(_loggingService, _calculatorService) {
                    this._loggingService = _loggingService;
                    this._calculatorService = _calculatorService;
                }
                ComponentOneComponent.prototype.onLog = function (message) {
                    this._loggingService.log(message);
                };
                //calculator click events
                ComponentOneComponent.prototype.onMultiply = function (num1, num2) {
                    this.result = "" + this._calculatorService.multiply(+num1, +num2);
                };
                ComponentOneComponent = __decorate([
                    core_1.Component({
                        selector: 'component-one',
                        template: "\n\n    <div>\n      <h2>Loggin Service</h2>\n        <input type=\"text\" #message>\n          <button (click)=\"onLog(message.value)\">SEND</button>\n    </div>\n\n    <div>\n      <h2>Calculator Service</h2>\n        <p>Add or multiply these two numbers: </p>\n        <input type=\"text\" #num1>\n        <input type=\"text\" #num2>\n        <button (click)=\"onMultiply(num1.value, num2.value)\">Multiply</button>        \n        <button (click)=\"onAdd(num1.value, num2.value)\">Add</button>\n        <br>\n        <p>Result: {{result}}</p>\n    </div>\n\n\n",
                        providers: [logging_service_1.LoggingService, calculator_service_1.CalculatorService]
                    }), 
                    __metadata('design:paramtypes', [logging_service_1.LoggingService, calculator_service_1.CalculatorService])
                ], ComponentOneComponent);
                return ComponentOneComponent;
            }());
            exports_1("ComponentOneComponent", ComponentOneComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudE9uZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUE4QkE7Z0JBRUUsZ0NBQWdDO2dCQUNoQywrQkFBb0IsZUFBK0IsRUFBVSxrQkFBcUM7b0JBQTlFLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtvQkFBVSx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO2dCQUFHLENBQUM7Z0JBRXRHLHFDQUFLLEdBQUwsVUFBTSxPQUFlO29CQUNuQixJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDcEMsQ0FBQztnQkFFRCx5QkFBeUI7Z0JBQ3pCLDBDQUFVLEdBQVYsVUFBVyxJQUFZLEVBQUUsSUFBWTtvQkFDbkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLEdBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNsRSxDQUFDO2dCQXRDSDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNULFFBQVEsRUFBRSxlQUFlO3dCQUN6QixRQUFRLEVBQUUsdWpCQW9CWDt3QkFDQyxTQUFTLEVBQUUsQ0FBQyxnQ0FBYyxFQUFFLHNDQUFpQixDQUFDO3FCQUMvQyxDQUFDOzt5Q0FBQTtnQkFtQkYsNEJBQUM7WUFBRCxDQWpCQSxBQWlCQyxJQUFBO1lBakJELHlEQWlCQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudE9uZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0xvZ2dpbmdTZXJ2aWNlfSBmcm9tIFwiLi9zZXJ2aWNlcy9sb2dnaW5nLnNlcnZpY2VcIjtcbmltcG9ydCB7Q2FsY3VsYXRvclNlcnZpY2V9IGZyb20gXCIuL3NlcnZpY2VzL2NhbGN1bGF0b3Iuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjb21wb25lbnQtb25lJyxcbiAgdGVtcGxhdGU6IGBcblxuICAgIDxkaXY+XG4gICAgICA8aDI+TG9nZ2luIFNlcnZpY2U8L2gyPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAjbWVzc2FnZT5cbiAgICAgICAgICA8YnV0dG9uIChjbGljayk9XCJvbkxvZyhtZXNzYWdlLnZhbHVlKVwiPlNFTkQ8L2J1dHRvbj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXY+XG4gICAgICA8aDI+Q2FsY3VsYXRvciBTZXJ2aWNlPC9oMj5cbiAgICAgICAgPHA+QWRkIG9yIG11bHRpcGx5IHRoZXNlIHR3byBudW1iZXJzOiA8L3A+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICNudW0xPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAjbnVtMj5cbiAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwib25NdWx0aXBseShudW0xLnZhbHVlLCBudW0yLnZhbHVlKVwiPk11bHRpcGx5PC9idXR0b24+ICAgICAgICBcbiAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwib25BZGQobnVtMS52YWx1ZSwgbnVtMi52YWx1ZSlcIj5BZGQ8L2J1dHRvbj5cbiAgICAgICAgPGJyPlxuICAgICAgICA8cD5SZXN1bHQ6IHt7cmVzdWx0fX08L3A+XG4gICAgPC9kaXY+XG5cblxuYCxcbiAgcHJvdmlkZXJzOiBbTG9nZ2luZ1NlcnZpY2UsIENhbGN1bGF0b3JTZXJ2aWNlXVxufSlcblxuZXhwb3J0IGNsYXNzIENvbXBvbmVudE9uZUNvbXBvbmVudCB7XG4gIHJlc3VsdDogc3RyaW5nO1xuICAvL2luamVjdCBvdXIgbG9nZ2luIHNlcnZpY2UgaGVyZVxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9sb2dnaW5nU2VydmljZTogTG9nZ2luZ1NlcnZpY2UsIHByaXZhdGUgX2NhbGN1bGF0b3JTZXJ2aWNlOiBDYWxjdWxhdG9yU2VydmljZSkge31cblxuICBvbkxvZyhtZXNzYWdlOiBzdHJpbmcpe1xuICAgIHRoaXMuX2xvZ2dpbmdTZXJ2aWNlLmxvZyhtZXNzYWdlKTtcbiAgfVxuXG4gIC8vY2FsY3VsYXRvciBjbGljayBldmVudHNcbiAgb25NdWx0aXBseShudW0xOiBudW1iZXIsIG51bTI6IG51bWJlcikge1xuICAgIHRoaXMucmVzdWx0ID0gXCJcIit0aGlzLl9jYWxjdWxhdG9yU2VydmljZS5tdWx0aXBseSgrbnVtMSwgK251bTIpO1xuICB9XG5cblxuXG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
