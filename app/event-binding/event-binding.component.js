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
                EventBindingComponent.prototype.reset = function () {
                    this.values = '';
                };
                EventBindingComponent = __decorate([
                    core_1.Component({
                        selector: 'event-bind',
                        template: "\n<hr>\n<br>\n<br>\n<h3>Event Binding</h3>\n<br>\n<p>Binding to events.</p>\n\n\n              {{eventTest()}}\n\n              <input type =\"text\" [value]=\"\" [ngClass]=\"{eventStyles:true}\" (keyup)=\"onKeyup(inputElement.value)\" #inputElement>\n              <br>\n              <p>{{values}}</p>\n              <button class=\"my-btn\"(click)=\"reset()\">RESET</button>\n\n\n  ",
                    }), 
                    __metadata('design:paramtypes', [])
                ], EventBindingComponent);
                return EventBindingComponent;
            }());
            exports_1("EventBindingComponent", EventBindingComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50LWJpbmRpbmcvZXZlbnQtYmluZGluZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUEwQkE7Z0JBQUE7b0JBR0UsYUFBUSxHQUFHLEVBQUUsQ0FBQztvQkFDZCxXQUFNLEdBQUcsRUFBRSxDQUFDO2dCQWVkLENBQUM7Z0JBYkMseUNBQVMsR0FBVDtvQkFDRSxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDakIsQ0FBQztnQkFFRCx1Q0FBTyxHQUFQLFVBQVEsS0FBYTtvQkFDbkIsSUFBSSxDQUFDLE1BQU0sSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDO2dCQUMvQixDQUFDO2dCQUVELHFDQUFLLEdBQUw7b0JBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7Z0JBQ25CLENBQUM7Z0JBeENIO29CQUFDLGdCQUFTLENBQUM7d0JBQ1QsUUFBUSxFQUFFLFlBQVk7d0JBQ3RCLFFBQVEsRUFBRSxtWUFpQlQ7cUJBR0YsQ0FBQzs7eUNBQUE7Z0JBcUJGLDRCQUFDO1lBQUQsQ0FuQkEsQUFtQkMsSUFBQTtZQW5CRCx5REFtQkMsQ0FBQSIsImZpbGUiOiJldmVudC1iaW5kaW5nL2V2ZW50LWJpbmRpbmcuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdldmVudC1iaW5kJyxcbiAgdGVtcGxhdGU6IGBcbjxocj5cbjxicj5cbjxicj5cbjxoMz5FdmVudCBCaW5kaW5nPC9oMz5cbjxicj5cbjxwPkJpbmRpbmcgdG8gZXZlbnRzLjwvcD5cblxuXG4gICAgICAgICAgICAgIHt7ZXZlbnRUZXN0KCl9fVxuXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlID1cInRleHRcIiBbdmFsdWVdPVwiXCIgW25nQ2xhc3NdPVwie2V2ZW50U3R5bGVzOnRydWV9XCIgKGtleXVwKT1cIm9uS2V5dXAoaW5wdXRFbGVtZW50LnZhbHVlKVwiICNpbnB1dEVsZW1lbnQ+XG4gICAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgICAgPHA+e3t2YWx1ZXN9fTwvcD5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm15LWJ0blwiKGNsaWNrKT1cInJlc2V0KClcIj5SRVNFVDwvYnV0dG9uPlxuXG5cbiAgYCxcblxuXG59KVxuXG5leHBvcnQgY2xhc3MgRXZlbnRCaW5kaW5nQ29tcG9uZW50IHtcblxuXG4gIG5pY2tOYW1lID0gJyc7XG4gIHZhbHVlcyA9ICcnO1xuXG4gIGV2ZW50VGVzdCgpIHtcbiAgICByZXR1cm4gMCA9PT0gMDtcbiAgfVxuXG4gIG9uS2V5dXAodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMudmFsdWVzICs9IHZhbHVlICsgJyB8ICc7XG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLnZhbHVlcyA9ICcnO1xuICB9XG5cblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
