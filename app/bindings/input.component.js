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
                    this.submittedCustom.emit(this.myself);
                };
                InputComponent = __decorate([
                    core_1.Component({
                        selector: 'my-input',
                        template: "\n        \n        <h2>Your Info, please..</h2>\n\n          <div>\n            <label for=\"name\">Name</label>\n              <input type=\"text\" id=\"name\" [(ngModel)]=\"myself.name\" (keyup)=\"onKeyUp()\"> \n          </div>\n\n          <div>\n            <label for=\"age\">Age</label>\n              <input type=\"text\" id=\"age\" [(ngModel)]=\"myself.age\" (keyup)=\"onKeyUp()\">\n          </div>          \n           <br>\n          <div>Filled Out: {{isFilled ? 'Yes' : 'No'}}</div>\n          <div>Valid: {{isValid ? 'Yes' : 'No'}}</div>\n          <br>\n          <button [disabled]=\"!isValid\" (click)=\"onSubmit()\">submit</button>          \n\n  ",
                        inputs: ['myself'],
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpbmRpbmdzL2lucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQTZCQTtnQkFBQTtvQkFFRSxXQUFNLEdBQUc7d0JBQ1AsSUFBSSxFQUFFLEVBQUU7d0JBQ1IsR0FBRyxFQUFFLEVBQUU7cUJBQ1IsQ0FBQztvQkFDRixZQUFZO29CQUNaLGFBQVEsR0FBRyxLQUFLLENBQUM7b0JBQ2pCLFlBQU8sR0FBRyxLQUFLLENBQUM7b0JBQ2hCLHVCQUF1QjtvQkFDdkIsb0JBQWUsR0FBRyxJQUFJLG1CQUFZLEVBQWlDLENBQUM7Z0JBcUJ0RSxDQUFDO2dCQW5CQyxnQ0FBTyxHQUFQO29CQUNFLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLEVBQUUsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsQ0FBQSxDQUFDO3dCQUNqRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztvQkFDeEIsQ0FBQztvQkFBQyxJQUFJLENBQUMsQ0FBQzt3QkFDTixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztvQkFDeEIsQ0FBQztvQkFDRCxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxFQUFFLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUEsQ0FBQzt3QkFDekQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7b0JBRXZCLENBQUM7b0JBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ04sSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7b0JBQ3ZCLENBQUM7Z0JBQ0gsQ0FBQztnQkFFRCxpQ0FBUSxHQUFSO29CQUNFLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDekMsQ0FBQztnQkF2REg7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVCxRQUFRLEVBQUUsVUFBVTt3QkFDcEIsUUFBUSxFQUFFLDhwQkFtQlQ7d0JBQ0QsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDO3dCQUNsQixPQUFPLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztxQkFFN0IsQ0FBQzs7a0NBQUE7Z0JBaUNGLHFCQUFDO1lBQUQsQ0EvQkEsQUErQkMsSUFBQTtZQS9CRCwyQ0ErQkMsQ0FBQSIsImZpbGUiOiJiaW5kaW5ncy9pbnB1dC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXktaW5wdXQnLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICBcbiAgICAgICAgPGgyPllvdXIgSW5mbywgcGxlYXNlLi48L2gyPlxuXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJuYW1lXCI+TmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibmFtZVwiIFsobmdNb2RlbCldPVwibXlzZWxmLm5hbWVcIiAoa2V5dXApPVwib25LZXlVcCgpXCI+IFxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJhZ2VcIj5BZ2U8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImFnZVwiIFsobmdNb2RlbCldPVwibXlzZWxmLmFnZVwiIChrZXl1cCk9XCJvbktleVVwKClcIj5cbiAgICAgICAgICA8L2Rpdj4gICAgICAgICAgXG4gICAgICAgICAgIDxicj5cbiAgICAgICAgICA8ZGl2PkZpbGxlZCBPdXQ6IHt7aXNGaWxsZWQgPyAnWWVzJyA6ICdObyd9fTwvZGl2PlxuICAgICAgICAgIDxkaXY+VmFsaWQ6IHt7aXNWYWxpZCA/ICdZZXMnIDogJ05vJ319PC9kaXY+XG4gICAgICAgICAgPGJyPlxuICAgICAgICAgIDxidXR0b24gW2Rpc2FibGVkXT1cIiFpc1ZhbGlkXCIgKGNsaWNrKT1cIm9uU3VibWl0KClcIj5zdWJtaXQ8L2J1dHRvbj4gICAgICAgICAgXG5cbiAgYCxcbiAgaW5wdXRzOiBbJ215c2VsZiddLFxuICBvdXRwdXRzOiBbJ3N1Ym1pdHRlZEN1c3RvbSddO1xuXG59KVxuXG5leHBvcnQgY2xhc3MgSW5wdXRDb21wb25lbnQge1xuXG4gIG15c2VsZiA9IHtcbiAgICBuYW1lOiAnJyxcbiAgICBhZ2U6ICcnXG4gIH07XG4gIC8vY2hlY2sgZm9ybVxuICBpc0ZpbGxlZCA9IGZhbHNlO1xuICBpc1ZhbGlkID0gZmFsc2U7XG4gIC8vYnV0dG9uIGN1c3RvbSBldmVudC4uXG4gIHN1Ym1pdHRlZEN1c3RvbSA9IG5ldyBFdmVudEVtaXR0ZXI8eyBuYW1lOiBzdHJpbmcsIGFnZTogc3RyaW5nIH0+KCk7XG5cbiAgb25LZXlVcCgpe1xuICAgIGlmKHRoaXMubXlzZWxmLm5hbWUgIT0gJycgJiYgdGhpcy5teXNlbGYuYWdlICE9ICcnKXtcbiAgICAgICB0aGlzLmlzRmlsbGVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pc0ZpbGxlZCA9IGZhbHNlO1xuICAgIH1cbiAgICBpZih0aGlzLm15c2VsZi5uYW1lICE9ICcnICYmIC9eXFxkKyQvLnRlc3QodGhpcy5teXNlbGYuYWdlKSl7XG4gICAgICAgdGhpcy5pc1ZhbGlkID0gdHJ1ZTtcblxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlzVmFsaWQgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBvblN1Ym1pdCgpe1xuICAgIHRoaXMuc3VibWl0dGVkQ3VzdG9tLmVtaXQodGhpcy5teXNlbGYpO1xuICB9XG5cblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
