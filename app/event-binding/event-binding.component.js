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
    var EventBindingComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            EventBindingComponent = (function () {
                function EventBindingComponent() {
                    this.nickName = '';
                    this.values = '';
                }
                EventBindingComponent.prototype.eventTest = function () {
                    return 0 === 0;
                };
                EventBindingComponent.prototype.onKeyup = function (value) {
                    this.values += value + ' | ';
                };
                EventBindingComponent = __decorate([
                    core_1.Component({
                        selector: 'event-bind',
                        template: "\n<hr>\n<br>\n<br>\n<h3>Event Binding</h3>\n<br>\n<p>Binding to events.</p>\n\n\n              {{eventTest()}}\n\n              <input type =\"text\" [value]=\"\" [ngClass]=\"{eventStyles:true}\" (keyup)=\"onKeyup(inputElement.value)\" #inputElement>\n              <br>\n              <p>{{values}}</p>\n\n\n  ",
                    }), 
                    __metadata('design:paramtypes', [])
                ], EventBindingComponent);
                return EventBindingComponent;
            }());
            exports_1("EventBindingComponent", EventBindingComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50LWJpbmRpbmcvZXZlbnQtYmluZGluZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF5QkE7Z0JBQUE7b0JBR0UsYUFBUSxHQUFHLEVBQUUsQ0FBQztvQkFDZCxXQUFNLEdBQUcsRUFBRSxDQUFDO2dCQVdkLENBQUM7Z0JBVEMseUNBQVMsR0FBVDtvQkFDRSxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDakIsQ0FBQztnQkFFRCx1Q0FBTyxHQUFQLFVBQVEsS0FBYTtvQkFDbkIsSUFBSSxDQUFDLE1BQU0sSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDO2dCQUMvQixDQUFDO2dCQW5DSDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNULFFBQVEsRUFBRSxZQUFZO3dCQUN0QixRQUFRLEVBQUUseVRBZ0JUO3FCQUdGLENBQUM7O3lDQUFBO2dCQWlCRiw0QkFBQztZQUFELENBZkEsQUFlQyxJQUFBO1lBZkQseURBZUMsQ0FBQSIsImZpbGUiOiJldmVudC1iaW5kaW5nL2V2ZW50LWJpbmRpbmcuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdldmVudC1iaW5kJyxcbiAgdGVtcGxhdGU6IGBcbjxocj5cbjxicj5cbjxicj5cbjxoMz5FdmVudCBCaW5kaW5nPC9oMz5cbjxicj5cbjxwPkJpbmRpbmcgdG8gZXZlbnRzLjwvcD5cblxuXG4gICAgICAgICAgICAgIHt7ZXZlbnRUZXN0KCl9fVxuXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlID1cInRleHRcIiBbdmFsdWVdPVwiXCIgW25nQ2xhc3NdPVwie2V2ZW50U3R5bGVzOnRydWV9XCIgKGtleXVwKT1cIm9uS2V5dXAoaW5wdXRFbGVtZW50LnZhbHVlKVwiICNpbnB1dEVsZW1lbnQ+XG4gICAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgICAgPHA+e3t2YWx1ZXN9fTwvcD5cblxuXG4gIGAsXG5cblxufSlcblxuZXhwb3J0IGNsYXNzIEV2ZW50QmluZGluZ0NvbXBvbmVudCB7XG5cblxuICBuaWNrTmFtZSA9ICcnO1xuICB2YWx1ZXMgPSAnJztcblxuICBldmVudFRlc3QoKSB7XG4gICAgcmV0dXJuIDAgPT09IDA7XG4gIH1cblxuICBvbktleXVwKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLnZhbHVlcyArPSB2YWx1ZSArICcgfCAnO1xuICB9XG5cblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
