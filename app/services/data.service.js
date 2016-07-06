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
    var DataService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            // injectable meta-data imported..
            DataService = (function () {
                function DataService() {
                    this._data = ['Stark', 'Lannister', 'Fray', 'Baratheon', 'Tully', 'Targeryan', 'Greyjoy'];
                }
                DataService.prototype.getRandomHouse = function () {
                    var randomNum = Math.floor(Math.random() * this._data.length); //random number beween 0 and 4
                    //return the result
                    return this._data[randomNum];
                };
                //insert a value
                DataService.prototype.insert = function (value) {
                    this._data.push(value);
                };
                DataService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], DataService);
                return DataService;
            }());
            exports_1("DataService", DataService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2RhdGEuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUVBLGtDQUFrQztZQUdsQztnQkFBQTtvQkFDWSxVQUFLLEdBQUcsQ0FBQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxTQUFTLENBQUMsQ0FBQztnQkFhakcsQ0FBQztnQkFYRyxvQ0FBYyxHQUFkO29CQUNJLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQSw4QkFBOEI7b0JBQzVGLG1CQUFtQjtvQkFDbkIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBRWpDLENBQUM7Z0JBQ0wsZ0JBQWdCO2dCQUNaLDRCQUFNLEdBQU4sVUFBTyxLQUFhO29CQUVoQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDM0IsQ0FBQztnQkFmTDtvQkFBQyxpQkFBVSxFQUFFOzsrQkFBQTtnQkFnQmIsa0JBQUM7WUFBRCxDQWRBLEFBY0MsSUFBQTtZQWRELHFDQWNDLENBQUEiLCJmaWxlIjoic2VydmljZXMvZGF0YS5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLy8gaW5qZWN0YWJsZSBtZXRhLWRhdGEgaW1wb3J0ZWQuLlxuQEluamVjdGFibGUoKVxuLy9cbmV4cG9ydCBjbGFzcyBEYXRhU2VydmljZSB7XG4gICAgcHJpdmF0ZSBfZGF0YSA9IFsnU3RhcmsnLCAnTGFubmlzdGVyJywgJ0ZyYXknLCAnQmFyYXRoZW9uJywgJ1R1bGx5JywgJ1RhcmdlcnlhbicsICdHcmV5am95J107XG5cbiAgICBnZXRSYW5kb21Ib3VzZSgpIHtcbiAgICAgICAgbGV0IHJhbmRvbU51bSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuX2RhdGEubGVuZ3RoKTsvL3JhbmRvbSBudW1iZXIgYmV3ZWVuIDAgYW5kIDRcbiAgICAgICAgLy9yZXR1cm4gdGhlIHJlc3VsdFxuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YVtyYW5kb21OdW1dO1xuICAgIFxuICAgIH1cbi8vaW5zZXJ0IGEgdmFsdWVcbiAgICBpbnNlcnQodmFsdWU6IHN0cmluZylcbiAgICB7XG4gICAgICAgIHRoaXMuX2RhdGEucHVzaCh2YWx1ZSk7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
