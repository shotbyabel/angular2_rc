System.register(['@angular/core', './property-binding/property-binding.component', './event-binding/event-binding.component', './twoway-binding/twoway-binding.component', './property-customBinding/custom-propertyBinding.component', './bindings/input.component', './bindings/confirm.component', './directives/attribute-directives.component', './directives/highlight.directive', './directives/structural-directives.component', './directives/unless.directive', './component1.component', './component2.component'], function(exports_1, context_1) {
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
    var core_1, property_binding_component_1, event_binding_component_1, twoway_binding_component_1, custom_propertyBinding_component_1, input_component_1, confirm_component_1, attribute_directives_component_1, highlight_directive_1, structural_directives_component_1, unless_directive_1, component1_component_1, component2_component_1;
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
            },
            function (component1_component_1_1) {
                component1_component_1 = component1_component_1_1;
            },
            function (component2_component_1_1) {
                component2_component_1 = component2_component_1_1;
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
                        template: "\n    <h3>String Interpolation Binding</h3>\n        {{myTest()}}\n\n          <input type =\"text\" value=\"{{name}}\" class=\"{{'new-styles'}}\">\n\n            <property-bind></property-bind>\n              <event-bind></event-bind>\n                <twoway-bind></twoway-bind>\n              \n              <br>\n              <hr>\n              \n            <h2>Property Binding to Custom Components</h2>\n              \n              <section class=\"parent-component\">\n\n                <h2>Parent Component!</h2>\n                  <p class=\"code\">app.component.ts</p>\n                    <h4 class=\"parents-header\"> Please enter your celebrity crush name</h4>\n                      <input type=\"text\" [(ngModel)]=\"theName\">\n                      <br>    \n                      <br>\n                        <section class=\"child-component\">\n\n                          <property-custom [celebCrush]=\"theName\" \n                                           [myAge]=\"23\" \n                                           (theSpotsUpdate)=\"theSpots = $event\">\n                          </property-custom>\n\n                            <p class=\"parent-component\">a spot called: \n                              <span class=\"childs-header\">{{theSpots}}\n                                <p class=\"code\">app.component.ts</p>\n                              </span>\n                            </p>\n\n                        </section>  \n                </section>\n                      <br>\n                      <hr>\n     <h3>Input Component</h3>     \n      \n        <div class=\"container\">\n          <my-input (submittedCustom)=\"onSubmit($event)\" [myself]=\"confirmMyself\"></my-input>\n\n\n        </div>\n\n        <div class=\"container\">\n          <my-confirm (confirmCustom)=\"onConfirm($event)\" [myself]=\"myself\"></my-confirm>\n        </div>\n        \n        <my-attribute-directive></my-attribute-directive>\n        <hr>\n        <h3>Structural Directives</h3>\n        <my-structural-directive></my-structural-directive>\n        <hr>\n        \n        <h2>Services</h2>\n        \n        <section class=\"component-1\">\n        \n          <h3>Component 1</h3>\n          <component-1></component-1>\n        \n        </section>\n\n           <h3>Component 2</h3>\n          <component-2></component-2>\n\n\n\n    ",
                        directives: [property_binding_component_1.PropertyBindingComponent,
                            event_binding_component_1.EventBindingComponent,
                            twoway_binding_component_1.TwowayBindingComponent,
                            custom_propertyBinding_component_1.CustomPropertyBindingComponent,
                            input_component_1.InputComponent, confirm_component_1.ConfirmComponent,
                            attribute_directives_component_1.AttributeDirectiveComponent,
                            highlight_directive_1.HighLightDirective,
                            structural_directives_component_1.StructuralDirectiveComponent,
                            unless_directive_1.UnlessDirective,
                            component1_component_1.Component1Component,
                            component2_component_1.Component2Component,
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUEyR0E7Z0JBQUE7b0JBRUUseUJBQXlCO29CQUN6QixXQUFNLEdBQUc7d0JBQ1AsSUFBSSxFQUFFLEVBQUU7d0JBQ1IsR0FBRyxFQUFFLEVBQUU7cUJBQ1IsQ0FBQztvQkFFRixrQkFBYSxHQUFHO3dCQUNkLElBQUksRUFBRSxFQUFFO3dCQUNSLEdBQUcsRUFBRSxFQUFFO3FCQUNSLENBQUM7b0JBY0YsYUFBYTtvQkFDYixZQUFPLEdBQUcsRUFBRSxDQUFDO29CQUNiLGFBQVEsR0FBRyxFQUFFLENBQUM7b0JBS2Qsb0JBQW9CO29CQUNwQixTQUFJLEdBQUcsVUFBVSxDQUFDO2dCQUVwQixDQUFDO2dCQXRCQywwQ0FBMEM7Z0JBQzFDLCtCQUFRLEdBQVIsVUFBUyxNQUFtQztvQkFDMUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUE7b0JBQUMsQ0FBQztnQkFFeEQsQ0FBQztnQkFFRCxnQkFBZ0I7Z0JBQ2hCLGdDQUFTLEdBQVQsVUFBVSxNQUFxQztvQkFDN0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUE7b0JBQUMsQ0FBQztnQkFFL0QsQ0FBQztnQkFNRCw2QkFBTSxHQUFOO29CQUNFLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNqQixDQUFDO2dCQTFISDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNULFFBQVEsRUFBRSxRQUFRO3dCQUNsQixRQUFRLEVBQUUsODBFQXdFUDt3QkFFSCxVQUFVLEVBQUUsQ0FBQyxxREFBd0I7NEJBQ3hCLCtDQUFxQjs0QkFDckIsaURBQXNCOzRCQUN0QixpRUFBOEI7NEJBQzlCLGdDQUFjLEVBQUUsb0NBQWdCOzRCQUNoQyw0REFBMkI7NEJBQzNCLHdDQUFrQjs0QkFDbEIsOERBQTRCOzRCQUM1QixrQ0FBZTs0QkFDZiwwQ0FBbUI7NEJBQ25CLDBDQUFtQjt5QkFDbEI7cUJBRWYsQ0FBQzs7Z0NBQUE7Z0JBcUNGLG1CQUFDO1lBQUQsQ0FuQ0EsQUFtQ0MsSUFBQTtZQW5DRCx1Q0FtQ0MsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtQcm9wZXJ0eUJpbmRpbmdDb21wb25lbnR9IGZyb20gJy4vcHJvcGVydHktYmluZGluZy9wcm9wZXJ0eS1iaW5kaW5nLmNvbXBvbmVudCc7XG5pbXBvcnQge0V2ZW50QmluZGluZ0NvbXBvbmVudH0gZnJvbSAnLi9ldmVudC1iaW5kaW5nL2V2ZW50LWJpbmRpbmcuY29tcG9uZW50JztcbmltcG9ydCB7VHdvd2F5QmluZGluZ0NvbXBvbmVudH0gZnJvbSAnLi90d293YXktYmluZGluZy90d293YXktYmluZGluZy5jb21wb25lbnQnO1xuaW1wb3J0IHtDdXN0b21Qcm9wZXJ0eUJpbmRpbmdDb21wb25lbnR9IGZyb20gJy4vcHJvcGVydHktY3VzdG9tQmluZGluZy9jdXN0b20tcHJvcGVydHlCaW5kaW5nLmNvbXBvbmVudCc7XG5pbXBvcnQge0lucHV0Q29tcG9uZW50fSBmcm9tICcuL2JpbmRpbmdzL2lucHV0LmNvbXBvbmVudCc7XG5pbXBvcnQge0NvbmZpcm1Db21wb25lbnR9IGZyb20gJy4vYmluZGluZ3MvY29uZmlybS5jb21wb25lbnQnO1xuaW1wb3J0IHtBdHRyaWJ1dGVEaXJlY3RpdmVDb21wb25lbnR9IGZyb20gJy4vZGlyZWN0aXZlcy9hdHRyaWJ1dGUtZGlyZWN0aXZlcy5jb21wb25lbnQnO1xuaW1wb3J0IHtIaWdoTGlnaHREaXJlY3RpdmV9IGZyb20gJy4vZGlyZWN0aXZlcy9oaWdobGlnaHQuZGlyZWN0aXZlJztcbmltcG9ydCB7U3RydWN0dXJhbERpcmVjdGl2ZUNvbXBvbmVudH0gZnJvbSAnLi9kaXJlY3RpdmVzL3N0cnVjdHVyYWwtZGlyZWN0aXZlcy5jb21wb25lbnQnO1xuaW1wb3J0IHtVbmxlc3NEaXJlY3RpdmV9IGZyb20gJy4vZGlyZWN0aXZlcy91bmxlc3MuZGlyZWN0aXZlJztcbmltcG9ydCB7Q29tcG9uZW50MUNvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnQxLmNvbXBvbmVudCc7XG5pbXBvcnQge0NvbXBvbmVudDJDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50Mi5jb21wb25lbnQnO1xuXG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8aDM+U3RyaW5nIEludGVycG9sYXRpb24gQmluZGluZzwvaDM+XG4gICAgICAgIHt7bXlUZXN0KCl9fVxuXG4gICAgICAgICAgPGlucHV0IHR5cGUgPVwidGV4dFwiIHZhbHVlPVwie3tuYW1lfX1cIiBjbGFzcz1cInt7J25ldy1zdHlsZXMnfX1cIj5cblxuICAgICAgICAgICAgPHByb3BlcnR5LWJpbmQ+PC9wcm9wZXJ0eS1iaW5kPlxuICAgICAgICAgICAgICA8ZXZlbnQtYmluZD48L2V2ZW50LWJpbmQ+XG4gICAgICAgICAgICAgICAgPHR3b3dheS1iaW5kPjwvdHdvd2F5LWJpbmQ+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICAgIDxocj5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8aDI+UHJvcGVydHkgQmluZGluZyB0byBDdXN0b20gQ29tcG9uZW50czwvaDI+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzcz1cInBhcmVudC1jb21wb25lbnRcIj5cblxuICAgICAgICAgICAgICAgIDxoMj5QYXJlbnQgQ29tcG9uZW50ITwvaDI+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImNvZGVcIj5hcHAuY29tcG9uZW50LnRzPC9wPlxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJwYXJlbnRzLWhlYWRlclwiPiBQbGVhc2UgZW50ZXIgeW91ciBjZWxlYnJpdHkgY3J1c2ggbmFtZTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgWyhuZ01vZGVsKV09XCJ0aGVOYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGJyPiAgICBcbiAgICAgICAgICAgICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzcz1cImNoaWxkLWNvbXBvbmVudFwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwcm9wZXJ0eS1jdXN0b20gW2NlbGViQ3J1c2hdPVwidGhlTmFtZVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtteUFnZV09XCIyM1wiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0aGVTcG90c1VwZGF0ZSk9XCJ0aGVTcG90cyA9ICRldmVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Byb3BlcnR5LWN1c3RvbT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicGFyZW50LWNvbXBvbmVudFwiPmEgc3BvdCBjYWxsZWQ6IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjaGlsZHMtaGVhZGVyXCI+e3t0aGVTcG90c319XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiY29kZVwiPmFwcC5jb21wb25lbnQudHM8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+ICBcbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgICAgICAgICAgIDxocj5cbiAgICAgPGgzPklucHV0IENvbXBvbmVudDwvaDM+ICAgICBcbiAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPG15LWlucHV0IChzdWJtaXR0ZWRDdXN0b20pPVwib25TdWJtaXQoJGV2ZW50KVwiIFtteXNlbGZdPVwiY29uZmlybU15c2VsZlwiPjwvbXktaW5wdXQ+XG5cblxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPG15LWNvbmZpcm0gKGNvbmZpcm1DdXN0b20pPVwib25Db25maXJtKCRldmVudClcIiBbbXlzZWxmXT1cIm15c2VsZlwiPjwvbXktY29uZmlybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgICA8bXktYXR0cmlidXRlLWRpcmVjdGl2ZT48L215LWF0dHJpYnV0ZS1kaXJlY3RpdmU+XG4gICAgICAgIDxocj5cbiAgICAgICAgPGgzPlN0cnVjdHVyYWwgRGlyZWN0aXZlczwvaDM+XG4gICAgICAgIDxteS1zdHJ1Y3R1cmFsLWRpcmVjdGl2ZT48L215LXN0cnVjdHVyYWwtZGlyZWN0aXZlPlxuICAgICAgICA8aHI+XG4gICAgICAgIFxuICAgICAgICA8aDI+U2VydmljZXM8L2gyPlxuICAgICAgICBcbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJjb21wb25lbnQtMVwiPlxuICAgICAgICBcbiAgICAgICAgICA8aDM+Q29tcG9uZW50IDE8L2gzPlxuICAgICAgICAgIDxjb21wb25lbnQtMT48L2NvbXBvbmVudC0xPlxuICAgICAgICBcbiAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgICAgIDxoMz5Db21wb25lbnQgMjwvaDM+XG4gICAgICAgICAgPGNvbXBvbmVudC0yPjwvY29tcG9uZW50LTI+XG5cblxuXG4gICAgYCxcblxuICBkaXJlY3RpdmVzOiBbUHJvcGVydHlCaW5kaW5nQ29tcG9uZW50LCBcbiAgICAgICAgICAgICAgIEV2ZW50QmluZGluZ0NvbXBvbmVudCwgXG4gICAgICAgICAgICAgICBUd293YXlCaW5kaW5nQ29tcG9uZW50LCBcbiAgICAgICAgICAgICAgIEN1c3RvbVByb3BlcnR5QmluZGluZ0NvbXBvbmVudCwgXG4gICAgICAgICAgICAgICBJbnB1dENvbXBvbmVudCwgQ29uZmlybUNvbXBvbmVudCwgXG4gICAgICAgICAgICAgICBBdHRyaWJ1dGVEaXJlY3RpdmVDb21wb25lbnQsXG4gICAgICAgICAgICAgICBIaWdoTGlnaHREaXJlY3RpdmUsXG4gICAgICAgICAgICAgICBTdHJ1Y3R1cmFsRGlyZWN0aXZlQ29tcG9uZW50LFxuICAgICAgICAgICAgICAgVW5sZXNzRGlyZWN0aXZlLFxuICAgICAgICAgICAgICAgQ29tcG9uZW50MUNvbXBvbmVudCxcbiAgICAgICAgICAgICAgIENvbXBvbmVudDJDb21wb25lbnQsXG4gICAgICAgICAgICAgICBdXG5cbn0pXG5cbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuXG4gIC8vaW5wdXQtY29tcG9uZW50IG9iamVjdHNcbiAgbXlzZWxmID0ge1xuICAgIG5hbWU6ICcnLFxuICAgIGFnZTogJydcbiAgfTtcblxuICBjb25maXJtTXlzZWxmID0ge1xuICAgIG5hbWU6ICcnLFxuICAgIGFnZTogJydcbiAgfTtcblxuICAvL3N1Ym1pdCB0aGUgZGF0YSBmcm9tIHRoZSBpbnB1dC1jb21wb25lbnRcbiAgb25TdWJtaXQobXlzZWxmOiB7bmFtZTogc3RyaW5nLCBhZ2U6IHN0cmluZ30pIHtcbiAgICB0aGlzLm15c2VsZiA9IHsgbmFtZTogbXlzZWxmLm5hbWUsIGFnZTogbXlzZWxmLmFnZSB9KTtcblxuICB9XG5cbiAgLy9jaGVjayB0aGUgZGF0YVxuICBvbkNvbmZpcm0obXlzZWxmOiB7IG5hbWU6IHN0cmluZywgYWdlOiBzdHJpbmcgfSkge1xuICAgIHRoaXMuY29uZmlybU15c2VsZiA9IHsgbmFtZTogbXlzZWxmLm5hbWUsIGFnZTogbXlzZWxmLmFnZSB9KTtcblxuICB9XG5cbiAgLy9wYXJlbnQtY2hpZFxuICB0aGVOYW1lID0gJyc7XG4gIHRoZVNwb3RzID0gJyc7XG5cbiAgbXlUZXN0KCkge1xuICAgIHJldHVybiAzID09PSAxO1xuICB9XG4gIC8vZnJvbSBmaXJzdCBiaW5kaW5nXG4gIG5hbWUgPSAnQWJlbCBCb2knO1xuXG59XG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
