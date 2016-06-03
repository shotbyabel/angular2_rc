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
    var ConfirmComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ConfirmComponent = (function () {
                function ConfirmComponent() {
                    this.myself = { name: '', age: '' };
                    this.isFilled = false;
                    this.isValid = false;
                    this.confirmCustom = new core_1.EventEmitter();
                }
                ConfirmComponent.prototype.onKeyUp = function () {
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
                ConfirmComponent.prototype.onConfirm = function () {
                    this.confirmCustom.emit(this.myself);
                };
                ConfirmComponent = __decorate([
                    core_1.Component({
                        selector: 'my-confirm',
                        template: "\n\n        <h2>You submitted this info</h2>\n          <h4>Please confirm it!</h4>\n\n            <p>Your name is <span class=\"highlight\">{{myself.name}}</span> \n                and you're <span class=\"highlight\">{{myself.age}}</span>\n            </p>\n\n          <div>\n            <label for=\"name\">Name</label>\n              <input type=\"text\" id=\"name\" [(ngModel)]=\"myself.name\" (keyup)=\"onKeyUp()\"> \n          </div>\n\n          <div>\n            <label for=\"age\">Age</label>\n              <input type=\"text\" id=\"age\" [(ngModel)]=\"myself.age\" (keyup)=\"onKeyUp()\">\n          </div>          \n           <br>\n          <div>Filled Out: {{isFilled ? 'Yes' : 'No'}}</div>\n          <div>Valid: {{isValid ? 'Yes' : 'No'}}</div>\n          <br>\n          <button [disabled]=\"!isValid\" (click)=\"onConfirm()\">confirm</button>          \n\n\n  ",
                        inputs: ['myself'],
                        outputs: ['confirmCustom']
                    }), 
                    __metadata('design:paramtypes', [])
                ], ConfirmComponent);
                return ConfirmComponent;
            }());
            exports_1("ConfirmComponent", ConfirmComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpbmRpbmdzL2NvbmZpcm0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBa0NBO2dCQUFBO29CQUVFLFdBQU0sR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDO29CQUMvQixhQUFRLEdBQUcsS0FBSyxDQUFDO29CQUNqQixZQUFPLEdBQUcsS0FBSyxDQUFDO29CQUNoQixrQkFBYSxHQUFHLElBQUksbUJBQVksRUFBaUMsQ0FBQztnQkFvQnBFLENBQUM7Z0JBbEJDLGtDQUFPLEdBQVA7b0JBQ0EsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksRUFBRSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7d0JBQ3BELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO29CQUN2QixDQUFDO29CQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNOLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO29CQUN4QixDQUFDO29CQUNELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLEVBQUUsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUM1RCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztvQkFFdEIsQ0FBQztvQkFBQyxJQUFJLENBQUMsQ0FBQzt3QkFDTixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztvQkFDdkIsQ0FBQztnQkFDSCxDQUFDO2dCQUVELG9DQUFTLEdBQVQ7b0JBQ0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUN2QyxDQUFDO2dCQXZERDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNULFFBQVEsRUFBRSxZQUFZO3dCQUN0QixRQUFRLEVBQUUsbzNCQXlCVDt3QkFDRCxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUM7d0JBQ2xCLE9BQU8sRUFBQSxDQUFDLGVBQWUsQ0FBQztxQkFDekIsQ0FBQzs7b0NBQUE7Z0JBMkJGLHVCQUFDO1lBQUQsQ0F6QkEsQUF5QkMsSUFBQTtZQXpCRCwrQ0F5QkMsQ0FBQSIsImZpbGUiOiJiaW5kaW5ncy9jb25maXJtLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdteS1jb25maXJtJyxcbiAgdGVtcGxhdGU6IGBcblxuICAgICAgICA8aDI+WW91IHN1Ym1pdHRlZCB0aGlzIGluZm88L2gyPlxuICAgICAgICAgIDxoND5QbGVhc2UgY29uZmlybSBpdCE8L2g0PlxuXG4gICAgICAgICAgICA8cD5Zb3VyIG5hbWUgaXMgPHNwYW4gY2xhc3M9XCJoaWdobGlnaHRcIj57e215c2VsZi5uYW1lfX08L3NwYW4+IFxuICAgICAgICAgICAgICAgIGFuZCB5b3UncmUgPHNwYW4gY2xhc3M9XCJoaWdobGlnaHRcIj57e215c2VsZi5hZ2V9fTwvc3Bhbj5cbiAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwibmFtZVwiPk5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm5hbWVcIiBbKG5nTW9kZWwpXT1cIm15c2VsZi5uYW1lXCIgKGtleXVwKT1cIm9uS2V5VXAoKVwiPiBcbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiYWdlXCI+QWdlPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJhZ2VcIiBbKG5nTW9kZWwpXT1cIm15c2VsZi5hZ2VcIiAoa2V5dXApPVwib25LZXlVcCgpXCI+XG4gICAgICAgICAgPC9kaXY+ICAgICAgICAgIFxuICAgICAgICAgICA8YnI+XG4gICAgICAgICAgPGRpdj5GaWxsZWQgT3V0OiB7e2lzRmlsbGVkID8gJ1llcycgOiAnTm8nfX08L2Rpdj5cbiAgICAgICAgICA8ZGl2PlZhbGlkOiB7e2lzVmFsaWQgPyAnWWVzJyA6ICdObyd9fTwvZGl2PlxuICAgICAgICAgIDxicj5cbiAgICAgICAgICA8YnV0dG9uIFtkaXNhYmxlZF09XCIhaXNWYWxpZFwiIChjbGljayk9XCJvbkNvbmZpcm0oKVwiPmNvbmZpcm08L2J1dHRvbj4gICAgICAgICAgXG5cblxuICBgLFxuICBpbnB1dHM6IFsnbXlzZWxmJ10sXG4gIG91dHB1dHNbJ2NvbmZpcm1DdXN0b20nXVxufSlcblxuZXhwb3J0IGNsYXNzIENvbmZpcm1Db21wb25lbnQge1xuICAgIFxuICBteXNlbGYgPSB7IG5hbWU6ICcnLCBhZ2U6ICcnIH07XG4gIGlzRmlsbGVkID0gZmFsc2U7XG4gIGlzVmFsaWQgPSBmYWxzZTtcbiAgY29uZmlybUN1c3RvbSA9IG5ldyBFdmVudEVtaXR0ZXI8eyBuYW1lOiBzdHJpbmcsIGFnZTogc3RyaW5nIH0+KCk7XG5cbiAgb25LZXlVcCgpe1xuICBpZiAodGhpcy5teXNlbGYubmFtZSAhPSAnJyAmJiB0aGlzLm15c2VsZi5hZ2UgIT0gJycpIHtcbiAgICB0aGlzLmlzRmlsbGVkID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmlzRmlsbGVkID0gZmFsc2U7XG4gIH1cbiAgaWYgKHRoaXMubXlzZWxmLm5hbWUgIT0gJycgJiYgL15cXGQrJC8udGVzdCh0aGlzLm15c2VsZi5hZ2UpKSB7XG4gICAgdGhpcy5pc1ZhbGlkID0gdHJ1ZTtcblxuICB9IGVsc2Uge1xuICAgIHRoaXMuaXNWYWxpZCA9IGZhbHNlO1xuICB9XG59XG5cbm9uQ29uZmlybSgpIHtcbiAgdGhpcy5jb25maXJtQ3VzdG9tLmVtaXQodGhpcy5teXNlbGYpO1xufVxuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
