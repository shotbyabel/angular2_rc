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
    var InputComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            InputComponent = (function () {
                function InputComponent() {
                    this.myself = {
                        name: '',
                        age: ''
                    };
                    //check form
                    this.isFilled = false;
                    this.isValid = false;
                    //button custom event..
                    this.submittedCustom = new core_1.EventEmitter();
                }
                InputComponent.prototype.onKeyUp = function () {
                    if (this.myself.name != '' && this.myself.age != '') {
                        this.isFilled = true;
                    }
                    else {
                        this.isFilled = false;
                    }
                    if (this.myself.name != '' && /^\d+$/.test(this.myself.age)) {
                        this.isValid = true;
                    }
                    else {
                        this.isValid = false;
                    }
                };
                InputComponent.prototype.onSubmit = function () {
                    this.submitted.emit(this.myself);
                };
                InputComponent = __decorate([
                    core_1.Component({
                        selector: 'my-input',
                        template: "\n        \n        <h2>Your Info, please..</h2>\n\n          <div>\n            <label for=\"name\">Name</label>\n              <input type=\"text\" id=\"name\" [(ngModel)]=\"myself.name\" (keyup)=\"onKeyUp()\"> \n          </div>\n\n          <div>\n            <label for=\"age\">Age</label>\n              <input type=\"text\" id=\"age\" [(ngModel)]=\"myself.age\" (keyup)=\"onKeyUp()\">\n          </div>          \n           <br>\n          <div>Filled Out: {{isFilled ? 'Yes' : 'No'}}</div>\n          <div>Valid: {{isValid ? 'Yes' : 'No'}}</div>\n          <br>\n          <button [disabled]=\"!isValid\" (click)=\"onSubmit()\">submit</button>          \n\n  ",
                        outputs: ['submittedCustom']
                    }), 
                    __metadata('design:paramtypes', [])
                ], InputComponent);
                return InputComponent;
            }());
            exports_1("InputComponent", InputComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpbmRpbmdzL2lucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQTRCQTtnQkFBQTtvQkFFRSxXQUFNLEdBQUc7d0JBQ1AsSUFBSSxFQUFFLEVBQUU7d0JBQ1IsR0FBRyxFQUFFLEVBQUU7cUJBQ1IsQ0FBQztvQkFDRixZQUFZO29CQUNaLGFBQVEsR0FBRyxLQUFLLENBQUM7b0JBQ2pCLFlBQU8sR0FBRyxLQUFLLENBQUM7b0JBQ2hCLHVCQUF1QjtvQkFDdkIsb0JBQWUsR0FBRyxJQUFJLG1CQUFZLEVBQWlDLENBQUM7Z0JBcUJ0RSxDQUFDO2dCQW5CQyxnQ0FBTyxHQUFQO29CQUNFLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLEVBQUUsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsQ0FBQSxDQUFDO3dCQUNqRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztvQkFDeEIsQ0FBQztvQkFBQyxJQUFJLENBQUMsQ0FBQzt3QkFDTixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztvQkFDeEIsQ0FBQztvQkFDRCxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxFQUFFLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUEsQ0FBQzt3QkFDekQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7b0JBRXZCLENBQUM7b0JBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ04sSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7b0JBQ3ZCLENBQUM7Z0JBQ0gsQ0FBQztnQkFFRCxpQ0FBUSxHQUFSO29CQUNFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDbkMsQ0FBQztnQkF0REg7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVCxRQUFRLEVBQUUsVUFBVTt3QkFDcEIsUUFBUSxFQUFFLDhwQkFtQlQ7d0JBQ0QsT0FBTyxFQUFFLENBQUMsaUJBQWlCLENBQUM7cUJBRTdCLENBQUM7O2tDQUFBO2dCQWlDRixxQkFBQztZQUFELENBL0JBLEFBK0JDLElBQUE7WUEvQkQsMkNBK0JDLENBQUEiLCJmaWxlIjoiYmluZGluZ3MvaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ215LWlucHV0JyxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgXG4gICAgICAgIDxoMj5Zb3VyIEluZm8sIHBsZWFzZS4uPC9oMj5cblxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwibmFtZVwiPk5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm5hbWVcIiBbKG5nTW9kZWwpXT1cIm15c2VsZi5uYW1lXCIgKGtleXVwKT1cIm9uS2V5VXAoKVwiPiBcbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiYWdlXCI+QWdlPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJhZ2VcIiBbKG5nTW9kZWwpXT1cIm15c2VsZi5hZ2VcIiAoa2V5dXApPVwib25LZXlVcCgpXCI+XG4gICAgICAgICAgPC9kaXY+ICAgICAgICAgIFxuICAgICAgICAgICA8YnI+XG4gICAgICAgICAgPGRpdj5GaWxsZWQgT3V0OiB7e2lzRmlsbGVkID8gJ1llcycgOiAnTm8nfX08L2Rpdj5cbiAgICAgICAgICA8ZGl2PlZhbGlkOiB7e2lzVmFsaWQgPyAnWWVzJyA6ICdObyd9fTwvZGl2PlxuICAgICAgICAgIDxicj5cbiAgICAgICAgICA8YnV0dG9uIFtkaXNhYmxlZF09XCIhaXNWYWxpZFwiIChjbGljayk9XCJvblN1Ym1pdCgpXCI+c3VibWl0PC9idXR0b24+ICAgICAgICAgIFxuXG4gIGAsXG4gIG91dHB1dHM6IFsnc3VibWl0dGVkQ3VzdG9tJ107XG5cbn0pXG5cbmV4cG9ydCBjbGFzcyBJbnB1dENvbXBvbmVudCB7XG5cbiAgbXlzZWxmID0ge1xuICAgIG5hbWU6ICcnLFxuICAgIGFnZTogJydcbiAgfTtcbiAgLy9jaGVjayBmb3JtXG4gIGlzRmlsbGVkID0gZmFsc2U7XG4gIGlzVmFsaWQgPSBmYWxzZTtcbiAgLy9idXR0b24gY3VzdG9tIGV2ZW50Li5cbiAgc3VibWl0dGVkQ3VzdG9tID0gbmV3IEV2ZW50RW1pdHRlcjx7IG5hbWU6IHN0cmluZywgYWdlOiBzdHJpbmcgfT4oKTtcblxuICBvbktleVVwKCl7XG4gICAgaWYodGhpcy5teXNlbGYubmFtZSAhPSAnJyAmJiB0aGlzLm15c2VsZi5hZ2UgIT0gJycpe1xuICAgICAgIHRoaXMuaXNGaWxsZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlzRmlsbGVkID0gZmFsc2U7XG4gICAgfVxuICAgIGlmKHRoaXMubXlzZWxmLm5hbWUgIT0gJycgJiYgL15cXGQrJC8udGVzdCh0aGlzLm15c2VsZi5hZ2UpKXtcbiAgICAgICB0aGlzLmlzVmFsaWQgPSB0cnVlO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaXNWYWxpZCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIG9uU3VibWl0KCl7XG4gICAgdGhpcy5zdWJtaXR0ZWQuZW1pdCh0aGlzLm15c2VsZik7XG4gIH1cblxuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
