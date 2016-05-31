System.register(['@angular/core', './property-binding/property-binding.component', './event-binding/event-binding.component'], function(exports_1, context_1) {
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
    var core_1, property_binding_component_1, event_binding_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (property_binding_component_1_1) {
                property_binding_component_1 = property_binding_component_1_1;
            },
            function (event_binding_component_1_1) {
                event_binding_component_1 = event_binding_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.name = 'Abel Boi';
                }
                AppComponent.prototype.myTest = function () {
                    return 3 === 1;
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <h3>String Interpolation Binding</h3>\n              {{myTest()}}\n\n              <input type =\"text\" value=\"{{name}}\" class=\"{{'new-styles'}}\">\n\n              <property-bind></property-bind>\n              <event-bind></event-bind>\n       \n    ",
                        directives: [property_binding_component_1.PropertyBindingComponent, event_binding_component_1.EventBindingComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFtQkE7Z0JBQUE7b0JBRUUsU0FBSSxHQUFHLFVBQVUsQ0FBQztnQkFNcEIsQ0FBQztnQkFKQyw2QkFBTSxHQUFOO29CQUNFLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNqQixDQUFDO2dCQXJCSDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxRQUFRO3dCQUNsQixRQUFRLEVBQUUsd1FBU1Q7d0JBRUQsVUFBVSxFQUFFLENBQUMscURBQXdCLEVBQUUsK0NBQXFCLENBQUM7cUJBQ2hFLENBQUM7O2dDQUFBO2dCQVNGLG1CQUFDO1lBQUQsQ0FSQSxBQVFDLElBQUE7WUFSRCx1Q0FRQyxDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1Byb3BlcnR5QmluZGluZ0NvbXBvbmVudH0gZnJvbSAnLi9wcm9wZXJ0eS1iaW5kaW5nL3Byb3BlcnR5LWJpbmRpbmcuY29tcG9uZW50JztcbmltcG9ydCB7RXZlbnRCaW5kaW5nQ29tcG9uZW50fSBmcm9tICcuL2V2ZW50LWJpbmRpbmcvZXZlbnQtYmluZGluZy5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICA8aDM+U3RyaW5nIEludGVycG9sYXRpb24gQmluZGluZzwvaDM+XG4gICAgICAgICAgICAgIHt7bXlUZXN0KCl9fVxuXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlID1cInRleHRcIiB2YWx1ZT1cInt7bmFtZX19XCIgY2xhc3M9XCJ7eyduZXctc3R5bGVzJ319XCI+XG5cbiAgICAgICAgICAgICAgPHByb3BlcnR5LWJpbmQ+PC9wcm9wZXJ0eS1iaW5kPlxuICAgICAgICAgICAgICA8ZXZlbnQtYmluZD48L2V2ZW50LWJpbmQ+XG4gICAgICAgXG4gICAgYCxcblxuICAgIGRpcmVjdGl2ZXM6IFtQcm9wZXJ0eUJpbmRpbmdDb21wb25lbnQsIEV2ZW50QmluZGluZ0NvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcblxuICBuYW1lID0gJ0FiZWwgQm9pJztcblxuICBteVRlc3QoKSB7XG4gICAgcmV0dXJuIDMgPT09IDE7XG4gIH1cblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
