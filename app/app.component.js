System.register(['@angular/core', './property-binding/property-binding.component', './event-binding/event-binding.component', './twoway-binding/twoway-binding.component', './property-customBinding/custom-propertyBinding.component', './bindings/input.component'], function(exports_1, context_1) {
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
    var core_1, property_binding_component_1, event_binding_component_1, twoway_binding_component_1, custom_propertyBinding_component_1, input_component_1;
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
            },
            function (twoway_binding_component_1_1) {
                twoway_binding_component_1 = twoway_binding_component_1_1;
            },
            function (custom_propertyBinding_component_1_1) {
                custom_propertyBinding_component_1 = custom_propertyBinding_component_1_1;
            },
            function (input_component_1_1) {
                input_component_1 = input_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    //input-component objects
                    this.myself = {
                        name: '',
                        age: ''
                    };
                    this.confirmMyself = {
                        name: '',
                        age: ''
                    };
                    //parent-chid
                    this.theName = '';
                    this.theSpots = '';
                    //from first binding
                    this.name = 'Abel Boi';
                }
                //submit the data from the input-component
                AppComponent.prototype.onSubmit = function (myself) {
                    this.myself = myself;
                };
                AppComponent.prototype.myTest = function () {
                    return 3 === 1;
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <h3>String Interpolation Binding</h3>\n        {{myTest()}}\n\n          <input type =\"text\" value=\"{{name}}\" class=\"{{'new-styles'}}\">\n\n            <property-bind></property-bind>\n              <event-bind></event-bind>\n                <twoway-bind></twoway-bind>\n              \n              <br>\n              <hr>\n              \n            <h2>Property Binding to Custom Components</h2>\n              \n              <section class=\"parent-component\">\n\n                <h2>Parent Component!</h2>\n                  <p class=\"code\">app.component.ts</p>\n                    <h4 class=\"parents-header\"> Please enter your celebrity crush name</h4>\n                      <input type=\"text\" [(ngModel)]=\"theName\">\n                      <br>    \n                      <br>\n                        <section class=\"child-component\">\n\n                          <property-custom [celebCrush]=\"theName\" \n                                           [myAge]=\"23\" \n                                           (theSpotsUpdate)=\"theSpots = $event\">\n                          </property-custom>\n\n                            <p class=\"parent-component\">a spot called: \n                              <span class=\"childs-header\">{{theSpots}}\n                                <p class=\"code\">app.component.ts</p>\n                              </span>\n                            </p>\n\n                        </section>  \n                </section>\n                      <br>\n                      <hr>\n     <h3>Input Component</h3>     \n      \n        <div class=\"container\">\n          <my-input (submittedCustom)=\"onSubmit($event)\"></my-input>\n\n\n        </div>\n\n        <div class=\"container\">\n          \n\n        </div>\n\n  \n    ",
                        directives: [property_binding_component_1.PropertyBindingComponent, event_binding_component_1.EventBindingComponent, twoway_binding_component_1.TwowayBindingComponent, custom_propertyBinding_component_1.CustomPropertyBindingComponent, input_component_1.InputComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFxRUE7Z0JBQUE7b0JBRUUseUJBQXlCO29CQUN6QixXQUFNLEdBQUc7d0JBQ1AsSUFBSSxFQUFFLEVBQUU7d0JBQ1IsR0FBRyxFQUFFLEVBQUU7cUJBQ1IsQ0FBQztvQkFFRixrQkFBYSxHQUFHO3dCQUNkLElBQUksRUFBRSxFQUFFO3dCQUNSLEdBQUcsRUFBRSxFQUFFO3FCQUNSLENBQUM7b0JBUUYsYUFBYTtvQkFDYixZQUFPLEdBQUcsRUFBRSxDQUFDO29CQUNiLGFBQVEsR0FBRyxFQUFFLENBQUM7b0JBS2Qsb0JBQW9CO29CQUNwQixTQUFJLEdBQUcsVUFBVSxDQUFDO2dCQUVwQixDQUFDO2dCQWhCQywwQ0FBMEM7Z0JBQzFDLCtCQUFRLEdBQVIsVUFBUyxNQUFtQztvQkFDMUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7Z0JBRXZCLENBQUM7Z0JBTUQsNkJBQU0sR0FBTjtvQkFDRSxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDakIsQ0FBQztnQkF2Rkg7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVCxRQUFRLEVBQUUsUUFBUTt3QkFDbEIsUUFBUSxFQUFFLDJ3REFzRFA7d0JBRUgsVUFBVSxFQUFFLENBQUMscURBQXdCLEVBQUUsK0NBQXFCLEVBQUUsaURBQXNCLEVBQUUsaUVBQThCLEVBQUUsZ0NBQWMsQ0FBQztxQkFFdEksQ0FBQzs7Z0NBQUE7Z0JBK0JGLG1CQUFDO1lBQUQsQ0E3QkEsQUE2QkMsSUFBQTtZQTdCRCx1Q0E2QkMsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtQcm9wZXJ0eUJpbmRpbmdDb21wb25lbnR9IGZyb20gJy4vcHJvcGVydHktYmluZGluZy9wcm9wZXJ0eS1iaW5kaW5nLmNvbXBvbmVudCc7XG5pbXBvcnQge0V2ZW50QmluZGluZ0NvbXBvbmVudH0gZnJvbSAnLi9ldmVudC1iaW5kaW5nL2V2ZW50LWJpbmRpbmcuY29tcG9uZW50JztcbmltcG9ydCB7VHdvd2F5QmluZGluZ0NvbXBvbmVudH0gZnJvbSAnLi90d293YXktYmluZGluZy90d293YXktYmluZGluZy5jb21wb25lbnQnO1xuaW1wb3J0IHtDdXN0b21Qcm9wZXJ0eUJpbmRpbmdDb21wb25lbnR9IGZyb20gJy4vcHJvcGVydHktY3VzdG9tQmluZGluZy9jdXN0b20tcHJvcGVydHlCaW5kaW5nLmNvbXBvbmVudCc7XG5pbXBvcnQge0lucHV0Q29tcG9uZW50fSBmcm9tICcuL2JpbmRpbmdzL2lucHV0LmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ215LWFwcCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGgzPlN0cmluZyBJbnRlcnBvbGF0aW9uIEJpbmRpbmc8L2gzPlxuICAgICAgICB7e215VGVzdCgpfX1cblxuICAgICAgICAgIDxpbnB1dCB0eXBlID1cInRleHRcIiB2YWx1ZT1cInt7bmFtZX19XCIgY2xhc3M9XCJ7eyduZXctc3R5bGVzJ319XCI+XG5cbiAgICAgICAgICAgIDxwcm9wZXJ0eS1iaW5kPjwvcHJvcGVydHktYmluZD5cbiAgICAgICAgICAgICAgPGV2ZW50LWJpbmQ+PC9ldmVudC1iaW5kPlxuICAgICAgICAgICAgICAgIDx0d293YXktYmluZD48L3R3b3dheS1iaW5kPlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgICA8aHI+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgPGgyPlByb3BlcnR5IEJpbmRpbmcgdG8gQ3VzdG9tIENvbXBvbmVudHM8L2gyPlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJwYXJlbnQtY29tcG9uZW50XCI+XG5cbiAgICAgICAgICAgICAgICA8aDI+UGFyZW50IENvbXBvbmVudCE8L2gyPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJjb2RlXCI+YXBwLmNvbXBvbmVudC50czwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzPVwicGFyZW50cy1oZWFkZXJcIj4gUGxlYXNlIGVudGVyIHlvdXIgY2VsZWJyaXR5IGNydXNoIG5hbWU8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIFsobmdNb2RlbCldPVwidGhlTmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxicj4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJjaGlsZC1jb21wb25lbnRcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cHJvcGVydHktY3VzdG9tIFtjZWxlYkNydXNoXT1cInRoZU5hbWVcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbXlBZ2VdPVwiMjNcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGhlU3BvdHNVcGRhdGUpPVwidGhlU3BvdHMgPSAkZXZlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wcm9wZXJ0eS1jdXN0b20+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInBhcmVudC1jb21wb25lbnRcIj5hIHNwb3QgY2FsbGVkOiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2hpbGRzLWhlYWRlclwiPnt7dGhlU3BvdHN9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImNvZGVcIj5hcHAuY29tcG9uZW50LnRzPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPiAgXG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgICAgICAgICAgICA8aHI+XG4gICAgIDxoMz5JbnB1dCBDb21wb25lbnQ8L2gzPiAgICAgXG4gICAgICBcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIDxteS1pbnB1dCAoc3VibWl0dGVkQ3VzdG9tKT1cIm9uU3VibWl0KCRldmVudClcIj48L215LWlucHV0PlxuXG5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIFxuXG4gICAgICAgIDwvZGl2PlxuXG4gIFxuICAgIGAsXG5cbiAgZGlyZWN0aXZlczogW1Byb3BlcnR5QmluZGluZ0NvbXBvbmVudCwgRXZlbnRCaW5kaW5nQ29tcG9uZW50LCBUd293YXlCaW5kaW5nQ29tcG9uZW50LCBDdXN0b21Qcm9wZXJ0eUJpbmRpbmdDb21wb25lbnQsIElucHV0Q29tcG9uZW50XVxuXG59KVxuXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcblxuICAvL2lucHV0LWNvbXBvbmVudCBvYmplY3RzXG4gIG15c2VsZiA9IHtcbiAgICBuYW1lOiAnJyxcbiAgICBhZ2U6ICcnXG4gIH07XG5cbiAgY29uZmlybU15c2VsZiA9IHtcbiAgICBuYW1lOiAnJyxcbiAgICBhZ2U6ICcnXG4gIH07XG5cbiAgLy9zdWJtaXQgdGhlIGRhdGEgZnJvbSB0aGUgaW5wdXQtY29tcG9uZW50XG4gIG9uU3VibWl0KG15c2VsZjoge25hbWU6IHN0cmluZywgYWdlOiBzdHJpbmd9KSB7XG4gICAgdGhpcy5teXNlbGYgPSBteXNlbGY7XG5cbiAgfVxuXG4gIC8vcGFyZW50LWNoaWRcbiAgdGhlTmFtZSA9ICcnO1xuICB0aGVTcG90cyA9ICcnO1xuXG4gIG15VGVzdCgpIHtcbiAgICByZXR1cm4gMyA9PT0gMTtcbiAgfVxuICAvL2Zyb20gZmlyc3QgYmluZGluZ1xuICBuYW1lID0gJ0FiZWwgQm9pJztcblxufVxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
