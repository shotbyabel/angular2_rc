System.register(['@angular/core', './property-binding/property-binding.component', './event-binding/event-binding.component', './twoway-binding/twoway-binding.component', './property-customBinding/custom-propertyBinding.component', './bindings/input.component', './bindings/confirm.component', './componentOne.component', './directives/attribute-directives.component', './directives/highlight.directive', './directives/structural-directives.component', './directives/unless.directive'], function(exports_1, context_1) {
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
    var core_1, property_binding_component_1, event_binding_component_1, twoway_binding_component_1, custom_propertyBinding_component_1, input_component_1, confirm_component_1, componentOne_component_1, attribute_directives_component_1, highlight_directive_1, structural_directives_component_1, unless_directive_1;
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
            },
            function (confirm_component_1_1) {
                confirm_component_1 = confirm_component_1_1;
            },
            function (componentOne_component_1_1) {
                componentOne_component_1 = componentOne_component_1_1;
            },
            function (attribute_directives_component_1_1) {
                attribute_directives_component_1 = attribute_directives_component_1_1;
            },
            function (highlight_directive_1_1) {
                highlight_directive_1 = highlight_directive_1_1;
            },
            function (structural_directives_component_1_1) {
                structural_directives_component_1 = structural_directives_component_1_1;
            },
            function (unless_directive_1_1) {
                unless_directive_1 = unless_directive_1_1;
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
                    this.myself = { name: myself.name, age: myself.age };
                    ;
                };
                //check the data
                AppComponent.prototype.onConfirm = function (myself) {
                    this.confirmMyself = { name: myself.name, age: myself.age };
                    ;
                };
                AppComponent.prototype.myTest = function () {
                    return 3 === 1;
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <h3>String Interpolation Binding</h3>\n        {{myTest()}}\n\n          <input type =\"text\" value=\"{{name}}\" class=\"{{'new-styles'}}\">\n\n            <property-bind></property-bind>\n              <event-bind></event-bind>\n                <twoway-bind></twoway-bind>\n              \n              <br>\n              <hr>\n              \n            <h2>Property Binding to Custom Components</h2>\n              \n              <section class=\"parent-component\">\n\n                <h2>Parent Component!</h2>\n                  <p class=\"code\">app.component.ts</p>\n                    <h4 class=\"parents-header\"> Please enter your celebrity crush name</h4>\n                      <input type=\"text\" [(ngModel)]=\"theName\">\n                      <br>    \n                      <br>\n                        <section class=\"child-component\">\n\n                          <property-custom [celebCrush]=\"theName\" \n                                           [myAge]=\"23\" \n                                           (theSpotsUpdate)=\"theSpots = $event\">\n                          </property-custom>\n\n                            <p class=\"parent-component\">a spot called: \n                              <span class=\"childs-header\">{{theSpots}}\n                                <p class=\"code\">app.component.ts</p>\n                              </span>\n                            </p>\n\n                        </section>  \n                </section>\n                      <br>\n                      <hr>\n     <h3>Input Component</h3>     \n      \n        <div class=\"container\">\n          <my-input (submittedCustom)=\"onSubmit($event)\" [myself]=\"confirmMyself\"></my-input>\n\n\n        </div>\n\n        <div class=\"container\">\n          <my-confirm (confirmCustom)=\"onConfirm($event)\" [myself]=\"myself\"></my-confirm>\n          \n\n        </div>\n        <my-attribute-directive></my-attribute-directive>\n        <hr>\n        <h3>Structural Directives</h3>\n        <my-structural-directive></my-structural-directive>\n        <hr>\n        <h3>Services</h3>\n\n        <component-one></component-one>\n  \n    ",
                        directives: [property_binding_component_1.PropertyBindingComponent,
                            event_binding_component_1.EventBindingComponent,
                            twoway_binding_component_1.TwowayBindingComponent,
                            custom_propertyBinding_component_1.CustomPropertyBindingComponent,
                            input_component_1.InputComponent, confirm_component_1.ConfirmComponent,
                            attribute_directives_component_1.AttributeDirectiveComponent,
                            highlight_directive_1.HighLightDirective,
                            structural_directives_component_1.StructuralDirectiveComponent,
                            unless_directive_1.UnlessDirective,
                            componentOne_component_1.ComponentOneComponent
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUErRkE7Z0JBQUE7b0JBRUUseUJBQXlCO29CQUN6QixXQUFNLEdBQUc7d0JBQ1AsSUFBSSxFQUFFLEVBQUU7d0JBQ1IsR0FBRyxFQUFFLEVBQUU7cUJBQ1IsQ0FBQztvQkFFRixrQkFBYSxHQUFHO3dCQUNkLElBQUksRUFBRSxFQUFFO3dCQUNSLEdBQUcsRUFBRSxFQUFFO3FCQUNSLENBQUM7b0JBY0YsYUFBYTtvQkFDYixZQUFPLEdBQUcsRUFBRSxDQUFDO29CQUNiLGFBQVEsR0FBRyxFQUFFLENBQUM7b0JBS2Qsb0JBQW9CO29CQUNwQixTQUFJLEdBQUcsVUFBVSxDQUFDO2dCQUVwQixDQUFDO2dCQXRCQywwQ0FBMEM7Z0JBQzFDLCtCQUFRLEdBQVIsVUFBUyxNQUFtQztvQkFDMUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUE7b0JBQUMsQ0FBQztnQkFFeEQsQ0FBQztnQkFFRCxnQkFBZ0I7Z0JBQ2hCLGdDQUFTLEdBQVQsVUFBVSxNQUFxQztvQkFDN0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUE7b0JBQUMsQ0FBQztnQkFFL0QsQ0FBQztnQkFNRCw2QkFBTSxHQUFOO29CQUNFLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNqQixDQUFDO2dCQS9HSDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNULFFBQVEsRUFBRSxRQUFRO3dCQUNsQixRQUFRLEVBQUUscW9FQThEUDt3QkFFSCxVQUFVLEVBQUUsQ0FBQyxxREFBd0I7NEJBQ3hCLCtDQUFxQjs0QkFDckIsaURBQXNCOzRCQUN0QixpRUFBOEI7NEJBQzlCLGdDQUFjLEVBQUUsb0NBQWdCOzRCQUNoQyw0REFBMkI7NEJBQzNCLHdDQUFrQjs0QkFDbEIsOERBQTRCOzRCQUM1QixrQ0FBZTs0QkFDZiw4Q0FBcUI7eUJBQ3BCO3FCQUVmLENBQUM7O2dDQUFBO2dCQXFDRixtQkFBQztZQUFELENBbkNBLEFBbUNDLElBQUE7WUFuQ0QsdUNBbUNDLENBQUEiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7UHJvcGVydHlCaW5kaW5nQ29tcG9uZW50fSBmcm9tICcuL3Byb3BlcnR5LWJpbmRpbmcvcHJvcGVydHktYmluZGluZy5jb21wb25lbnQnO1xuaW1wb3J0IHtFdmVudEJpbmRpbmdDb21wb25lbnR9IGZyb20gJy4vZXZlbnQtYmluZGluZy9ldmVudC1iaW5kaW5nLmNvbXBvbmVudCc7XG5pbXBvcnQge1R3b3dheUJpbmRpbmdDb21wb25lbnR9IGZyb20gJy4vdHdvd2F5LWJpbmRpbmcvdHdvd2F5LWJpbmRpbmcuY29tcG9uZW50JztcbmltcG9ydCB7Q3VzdG9tUHJvcGVydHlCaW5kaW5nQ29tcG9uZW50fSBmcm9tICcuL3Byb3BlcnR5LWN1c3RvbUJpbmRpbmcvY3VzdG9tLXByb3BlcnR5QmluZGluZy5jb21wb25lbnQnO1xuaW1wb3J0IHtJbnB1dENvbXBvbmVudH0gZnJvbSAnLi9iaW5kaW5ncy9pbnB1dC5jb21wb25lbnQnO1xuaW1wb3J0IHtDb25maXJtQ29tcG9uZW50fSBmcm9tICcuL2JpbmRpbmdzL2NvbmZpcm0uY29tcG9uZW50JztcbmltcG9ydCB7Q29tcG9uZW50T25lQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudE9uZS5jb21wb25lbnQnO1xuaW1wb3J0IHtBdHRyaWJ1dGVEaXJlY3RpdmVDb21wb25lbnR9IGZyb20gJy4vZGlyZWN0aXZlcy9hdHRyaWJ1dGUtZGlyZWN0aXZlcy5jb21wb25lbnQnO1xuaW1wb3J0IHtIaWdoTGlnaHREaXJlY3RpdmV9IGZyb20gJy4vZGlyZWN0aXZlcy9oaWdobGlnaHQuZGlyZWN0aXZlJztcbmltcG9ydCB7U3RydWN0dXJhbERpcmVjdGl2ZUNvbXBvbmVudH0gZnJvbSAnLi9kaXJlY3RpdmVzL3N0cnVjdHVyYWwtZGlyZWN0aXZlcy5jb21wb25lbnQnO1xuaW1wb3J0IHtVbmxlc3NEaXJlY3RpdmV9IGZyb20gJy4vZGlyZWN0aXZlcy91bmxlc3MuZGlyZWN0aXZlJztcblxuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ215LWFwcCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGgzPlN0cmluZyBJbnRlcnBvbGF0aW9uIEJpbmRpbmc8L2gzPlxuICAgICAgICB7e215VGVzdCgpfX1cblxuICAgICAgICAgIDxpbnB1dCB0eXBlID1cInRleHRcIiB2YWx1ZT1cInt7bmFtZX19XCIgY2xhc3M9XCJ7eyduZXctc3R5bGVzJ319XCI+XG5cbiAgICAgICAgICAgIDxwcm9wZXJ0eS1iaW5kPjwvcHJvcGVydHktYmluZD5cbiAgICAgICAgICAgICAgPGV2ZW50LWJpbmQ+PC9ldmVudC1iaW5kPlxuICAgICAgICAgICAgICAgIDx0d293YXktYmluZD48L3R3b3dheS1iaW5kPlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgICA8aHI+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgPGgyPlByb3BlcnR5IEJpbmRpbmcgdG8gQ3VzdG9tIENvbXBvbmVudHM8L2gyPlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJwYXJlbnQtY29tcG9uZW50XCI+XG5cbiAgICAgICAgICAgICAgICA8aDI+UGFyZW50IENvbXBvbmVudCE8L2gyPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJjb2RlXCI+YXBwLmNvbXBvbmVudC50czwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzPVwicGFyZW50cy1oZWFkZXJcIj4gUGxlYXNlIGVudGVyIHlvdXIgY2VsZWJyaXR5IGNydXNoIG5hbWU8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIFsobmdNb2RlbCldPVwidGhlTmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxicj4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJjaGlsZC1jb21wb25lbnRcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cHJvcGVydHktY3VzdG9tIFtjZWxlYkNydXNoXT1cInRoZU5hbWVcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbXlBZ2VdPVwiMjNcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGhlU3BvdHNVcGRhdGUpPVwidGhlU3BvdHMgPSAkZXZlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wcm9wZXJ0eS1jdXN0b20+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInBhcmVudC1jb21wb25lbnRcIj5hIHNwb3QgY2FsbGVkOiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2hpbGRzLWhlYWRlclwiPnt7dGhlU3BvdHN9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImNvZGVcIj5hcHAuY29tcG9uZW50LnRzPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPiAgXG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgICAgICAgICAgICA8aHI+XG4gICAgIDxoMz5JbnB1dCBDb21wb25lbnQ8L2gzPiAgICAgXG4gICAgICBcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIDxteS1pbnB1dCAoc3VibWl0dGVkQ3VzdG9tKT1cIm9uU3VibWl0KCRldmVudClcIiBbbXlzZWxmXT1cImNvbmZpcm1NeXNlbGZcIj48L215LWlucHV0PlxuXG5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIDxteS1jb25maXJtIChjb25maXJtQ3VzdG9tKT1cIm9uQ29uZmlybSgkZXZlbnQpXCIgW215c2VsZl09XCJteXNlbGZcIj48L215LWNvbmZpcm0+XG4gICAgICAgICAgXG5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxteS1hdHRyaWJ1dGUtZGlyZWN0aXZlPjwvbXktYXR0cmlidXRlLWRpcmVjdGl2ZT5cbiAgICAgICAgPGhyPlxuICAgICAgICA8aDM+U3RydWN0dXJhbCBEaXJlY3RpdmVzPC9oMz5cbiAgICAgICAgPG15LXN0cnVjdHVyYWwtZGlyZWN0aXZlPjwvbXktc3RydWN0dXJhbC1kaXJlY3RpdmU+XG4gICAgICAgIDxocj5cbiAgICAgICAgPGgzPlNlcnZpY2VzPC9oMz5cblxuICAgICAgICA8Y29tcG9uZW50LW9uZT48L2NvbXBvbmVudC1vbmU+XG4gIFxuICAgIGAsXG5cbiAgZGlyZWN0aXZlczogW1Byb3BlcnR5QmluZGluZ0NvbXBvbmVudCwgXG4gICAgICAgICAgICAgICBFdmVudEJpbmRpbmdDb21wb25lbnQsIFxuICAgICAgICAgICAgICAgVHdvd2F5QmluZGluZ0NvbXBvbmVudCwgXG4gICAgICAgICAgICAgICBDdXN0b21Qcm9wZXJ0eUJpbmRpbmdDb21wb25lbnQsIFxuICAgICAgICAgICAgICAgSW5wdXRDb21wb25lbnQsIENvbmZpcm1Db21wb25lbnQsIFxuICAgICAgICAgICAgICAgQXR0cmlidXRlRGlyZWN0aXZlQ29tcG9uZW50LFxuICAgICAgICAgICAgICAgSGlnaExpZ2h0RGlyZWN0aXZlLFxuICAgICAgICAgICAgICAgU3RydWN0dXJhbERpcmVjdGl2ZUNvbXBvbmVudCxcbiAgICAgICAgICAgICAgIFVubGVzc0RpcmVjdGl2ZSxcbiAgICAgICAgICAgICAgIENvbXBvbmVudE9uZUNvbXBvbmVudFxuICAgICAgICAgICAgICAgXVxuXG59KVxuXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcblxuICAvL2lucHV0LWNvbXBvbmVudCBvYmplY3RzXG4gIG15c2VsZiA9IHtcbiAgICBuYW1lOiAnJyxcbiAgICBhZ2U6ICcnXG4gIH07XG5cbiAgY29uZmlybU15c2VsZiA9IHtcbiAgICBuYW1lOiAnJyxcbiAgICBhZ2U6ICcnXG4gIH07XG5cbiAgLy9zdWJtaXQgdGhlIGRhdGEgZnJvbSB0aGUgaW5wdXQtY29tcG9uZW50XG4gIG9uU3VibWl0KG15c2VsZjoge25hbWU6IHN0cmluZywgYWdlOiBzdHJpbmd9KSB7XG4gICAgdGhpcy5teXNlbGYgPSB7IG5hbWU6IG15c2VsZi5uYW1lLCBhZ2U6IG15c2VsZi5hZ2UgfSk7XG5cbiAgfVxuXG4gIC8vY2hlY2sgdGhlIGRhdGFcbiAgb25Db25maXJtKG15c2VsZjogeyBuYW1lOiBzdHJpbmcsIGFnZTogc3RyaW5nIH0pIHtcbiAgICB0aGlzLmNvbmZpcm1NeXNlbGYgPSB7IG5hbWU6IG15c2VsZi5uYW1lLCBhZ2U6IG15c2VsZi5hZ2UgfSk7XG5cbiAgfVxuXG4gIC8vcGFyZW50LWNoaWRcbiAgdGhlTmFtZSA9ICcnO1xuICB0aGVTcG90cyA9ICcnO1xuXG4gIG15VGVzdCgpIHtcbiAgICByZXR1cm4gMyA9PT0gMTtcbiAgfVxuICAvL2Zyb20gZmlyc3QgYmluZGluZ1xuICBuYW1lID0gJ0FiZWwgQm9pJztcblxufVxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
