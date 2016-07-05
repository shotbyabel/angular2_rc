System.register(['@angular/core'], function(exports_1, context_1) {
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
    var core_1;
    var CalculatorService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            // injectable meta-data imported..
            CalculatorService = (function () {
                function CalculatorService() {
                }
                //2 functions needed, add and multiply
                CalculatorService.prototype.add = function (num1, num2) {
                    return num1 + num2;
                };
                CalculatorService.prototype.multiply = function (num1, num2) {
                    return num1 * num2;
                };
                CalculatorService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], CalculatorService);
                return CalculatorService;
            }());
            exports_1("CalculatorService", CalculatorService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2NhbGN1bGF0b3Iuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUVBLGtDQUFrQztZQUdsQztnQkFBQTtnQkFVQSxDQUFDO2dCQVRHLHNDQUFzQztnQkFDdEMsK0JBQUcsR0FBSCxVQUFJLElBQVksRUFBRSxJQUFZO29CQUMxQixNQUFNLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztnQkFDdkIsQ0FBQztnQkFFRCxvQ0FBUSxHQUFSLFVBQVMsSUFBWSxFQUFFLElBQVk7b0JBQy9CLE1BQU0sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO2dCQUN2QixDQUFDO2dCQVZMO29CQUFDLGlCQUFVLEVBQUU7O3FDQUFBO2dCQVliLHdCQUFDO1lBQUQsQ0FWQSxBQVVDLElBQUE7WUFWRCxpREFVQyxDQUFBIiwiZmlsZSI6InNlcnZpY2VzL2NhbGN1bGF0b3Iuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8vIGluamVjdGFibGUgbWV0YS1kYXRhIGltcG9ydGVkLi5cbkBJbmplY3RhYmxlKClcbi8vXG5leHBvcnQgY2xhc3MgQ2FsY3VsYXRvclNlcnZpY2Uge1xuICAgIC8vMiBmdW5jdGlvbnMgbmVlZGVkLCBhZGQgYW5kIG11bHRpcGx5XG4gICAgYWRkKG51bTE6IG51bWJlciwgbnVtMjogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiBudW0xICsgbnVtMjtcbiAgICB9XG5cbiAgICBtdWx0aXBseShudW0xOiBudW1iZXIsIG51bTI6IG51bWJlcikge1xuICAgICAgICByZXR1cm4gbnVtMSAqIG51bTI7XG4gICAgfVxuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
