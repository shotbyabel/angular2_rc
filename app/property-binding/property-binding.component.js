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
    var PropertyBindingComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            PropertyBindingComponent = (function () {
                function PropertyBindingComponent() {
                    this.lastName = 'greatest';
                }
                PropertyBindingComponent.prototype.newTest = function () {
                    return 1 === 1;
                };
                PropertyBindingComponent = __decorate([
                    core_1.Component({
                        selector: 'property-bind',
                        template: "\n<hr>\n<br>\n<br>\n<h3>Property Binding</h3>\n<br>\n<p>Binding to an HTML element.</p>\n\n              {{newTest()}}\n\n              <input type =\"text\" [value]=\"lastName\" [ngClass]=\"{otherStyles:true}\">\n              <br>\n              <p>Binding to a property of a directive.</p>\n\n\n\n  ",
                    }), 
                    __metadata('design:paramtypes', [])
                ], PropertyBindingComponent);
                return PropertyBindingComponent;
            }());
            exports_1("PropertyBindingComponent", PropertyBindingComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3BlcnR5LWJpbmRpbmcvcHJvcGVydHktYmluZGluZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF5QkE7Z0JBQUE7b0JBR0UsYUFBUSxHQUFHLFVBQVUsQ0FBQztnQkFPeEIsQ0FBQztnQkFMQywwQ0FBTyxHQUFQO29CQUNFLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNqQixDQUFDO2dCQTlCSDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNULFFBQVEsRUFBRSxlQUFlO3dCQUN6QixRQUFRLEVBQUUsZ1RBZ0JUO3FCQUdGLENBQUM7OzRDQUFBO2dCQVlGLCtCQUFDO1lBQUQsQ0FWQSxBQVVDLElBQUE7WUFWRCwrREFVQyxDQUFBIiwiZmlsZSI6InByb3BlcnR5LWJpbmRpbmcvcHJvcGVydHktYmluZGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3Byb3BlcnR5LWJpbmQnLFxuICB0ZW1wbGF0ZTogYFxuPGhyPlxuPGJyPlxuPGJyPlxuPGgzPlByb3BlcnR5IEJpbmRpbmc8L2gzPlxuPGJyPlxuPHA+QmluZGluZyB0byBhbiBIVE1MIGVsZW1lbnQuPC9wPlxuXG4gICAgICAgICAgICAgIHt7bmV3VGVzdCgpfX1cblxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZSA9XCJ0ZXh0XCIgW3ZhbHVlXT1cImxhc3ROYW1lXCIgW25nQ2xhc3NdPVwie290aGVyU3R5bGVzOnRydWV9XCI+XG4gICAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgICAgPHA+QmluZGluZyB0byBhIHByb3BlcnR5IG9mIGEgZGlyZWN0aXZlLjwvcD5cblxuXG5cbiAgYCxcblxuXG59KVxuXG5leHBvcnQgY2xhc3MgUHJvcGVydHlCaW5kaW5nQ29tcG9uZW50IHtcblxuXG4gIGxhc3ROYW1lID0gJ2dyZWF0ZXN0JztcblxuICBuZXdUZXN0KCkge1xuICAgIHJldHVybiAxID09PSAxO1xuICB9XG5cblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
