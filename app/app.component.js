System.register(['@angular/core', './property-binding/property-binding.component', './event-binding/event-binding.component', './twoway-binding/twoway-binding.component', './property-customBinding/custom-propertyBinding.component', './bindings/input.component', './bindings/confirm.component', './directives/attribute-directives.component', './directives/highlight.directive', './directives/structural-directives.component', './directives/unless.directive'], function(exports_1, context_1) {
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
    var core_1, property_binding_component_1, event_binding_component_1, twoway_binding_component_1, custom_propertyBinding_component_1, input_component_1, confirm_component_1, attribute_directives_component_1, highlight_directive_1, structural_directives_component_1, unless_directive_1;
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
                        template: "\n    <h3>String Interpolation Binding</h3>\n        {{myTest()}}\n\n          <input type =\"text\" value=\"{{name}}\" class=\"{{'new-styles'}}\">\n\n            <property-bind></property-bind>\n              <event-bind></event-bind>\n                <twoway-bind></twoway-bind>\n              \n              <br>\n              <hr>\n              \n            <h2>Property Binding to Custom Components</h2>\n              \n              <section class=\"parent-component\">\n\n                <h2>Parent Component!</h2>\n                  <p class=\"code\">app.component.ts</p>\n                    <h4 class=\"parents-header\"> Please enter your celebrity crush name</h4>\n                      <input type=\"text\" [(ngModel)]=\"theName\">\n                      <br>    \n                      <br>\n                        <section class=\"child-component\">\n\n                          <property-custom [celebCrush]=\"theName\" \n                                           [myAge]=\"23\" \n                                           (theSpotsUpdate)=\"theSpots = $event\">\n                          </property-custom>\n\n                            <p class=\"parent-component\">a spot called: \n                              <span class=\"childs-header\">{{theSpots}}\n                                <p class=\"code\">app.component.ts</p>\n                              </span>\n                            </p>\n\n                        </section>  \n                </section>\n                      <br>\n                      <hr>\n     <h3>Input Component</h3>     \n      \n        <div class=\"container\">\n          <my-input (submittedCustom)=\"onSubmit($event)\" [myself]=\"confirmMyself\"></my-input>\n\n\n        </div>\n\n        <div class=\"container\">\n          <my-confirm (confirmCustom)=\"onConfirm($event)\" [myself]=\"myself\"></my-confirm>\n          \n\n        </div>\n        <my-attribute-directive></my-attribute-directive>\n        <hr>\n        <h3>Structural Directives</h3>\n        <my-structural-directive><my-structural-directive>\n\n\n\n  \n    ",
                        directives: [property_binding_component_1.PropertyBindingComponent,
                            event_binding_component_1.EventBindingComponent,
                            twoway_binding_component_1.TwowayBindingComponent,
                            custom_propertyBinding_component_1.CustomPropertyBindingComponent,
                            input_component_1.InputComponent, confirm_component_1.ConfirmComponent,
                            attribute_directives_component_1.AttributeDirectiveComponent,
                            highlight_directive_1.HighLightDirective,
                            structural_directives_component_1.StructuralDirectiveComponent,
                            unless_directive_1.UnlessDirective
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUE0RkE7Z0JBQUE7b0JBRUUseUJBQXlCO29CQUN6QixXQUFNLEdBQUc7d0JBQ1AsSUFBSSxFQUFFLEVBQUU7d0JBQ1IsR0FBRyxFQUFFLEVBQUU7cUJBQ1IsQ0FBQztvQkFFRixrQkFBYSxHQUFHO3dCQUNkLElBQUksRUFBRSxFQUFFO3dCQUNSLEdBQUcsRUFBRSxFQUFFO3FCQUNSLENBQUM7b0JBY0YsYUFBYTtvQkFDYixZQUFPLEdBQUcsRUFBRSxDQUFDO29CQUNiLGFBQVEsR0FBRyxFQUFFLENBQUM7b0JBS2Qsb0JBQW9CO29CQUNwQixTQUFJLEdBQUcsVUFBVSxDQUFDO2dCQUVwQixDQUFDO2dCQXRCQywwQ0FBMEM7Z0JBQzFDLCtCQUFRLEdBQVIsVUFBUyxNQUFtQztvQkFDMUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUE7b0JBQUMsQ0FBQztnQkFFeEQsQ0FBQztnQkFFRCxnQkFBZ0I7Z0JBQ2hCLGdDQUFTLEdBQVQsVUFBVSxNQUFxQztvQkFDN0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUE7b0JBQUMsQ0FBQztnQkFFL0QsQ0FBQztnQkFNRCw2QkFBTSxHQUFOO29CQUNFLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNqQixDQUFDO2dCQTdHSDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNULFFBQVEsRUFBRSxRQUFRO3dCQUNsQixRQUFRLEVBQUUsc2pFQTZEUDt3QkFFSCxVQUFVLEVBQUUsQ0FBQyxxREFBd0I7NEJBQ3hCLCtDQUFxQjs0QkFDckIsaURBQXNCOzRCQUN0QixpRUFBOEI7NEJBQzlCLGdDQUFjLEVBQUUsb0NBQWdCOzRCQUNoQyw0REFBMkI7NEJBQzNCLHdDQUFrQjs0QkFDbEIsOERBQTRCOzRCQUM1QixrQ0FBZTt5QkFDZDtxQkFFZixDQUFDOztnQ0FBQTtnQkFxQ0YsbUJBQUM7WUFBRCxDQW5DQSxBQW1DQyxJQUFBO1lBbkNELHVDQW1DQyxDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1Byb3BlcnR5QmluZGluZ0NvbXBvbmVudH0gZnJvbSAnLi9wcm9wZXJ0eS1iaW5kaW5nL3Byb3BlcnR5LWJpbmRpbmcuY29tcG9uZW50JztcbmltcG9ydCB7RXZlbnRCaW5kaW5nQ29tcG9uZW50fSBmcm9tICcuL2V2ZW50LWJpbmRpbmcvZXZlbnQtYmluZGluZy5jb21wb25lbnQnO1xuaW1wb3J0IHtUd293YXlCaW5kaW5nQ29tcG9uZW50fSBmcm9tICcuL3R3b3dheS1iaW5kaW5nL3R3b3dheS1iaW5kaW5nLmNvbXBvbmVudCc7XG5pbXBvcnQge0N1c3RvbVByb3BlcnR5QmluZGluZ0NvbXBvbmVudH0gZnJvbSAnLi9wcm9wZXJ0eS1jdXN0b21CaW5kaW5nL2N1c3RvbS1wcm9wZXJ0eUJpbmRpbmcuY29tcG9uZW50JztcbmltcG9ydCB7SW5wdXRDb21wb25lbnR9IGZyb20gJy4vYmluZGluZ3MvaW5wdXQuY29tcG9uZW50JztcbmltcG9ydCB7Q29uZmlybUNvbXBvbmVudH0gZnJvbSAnLi9iaW5kaW5ncy9jb25maXJtLmNvbXBvbmVudCc7XG4vL0RJUkVDVElWRVNcbmltcG9ydCB7QXR0cmlidXRlRGlyZWN0aXZlQ29tcG9uZW50fSBmcm9tICcuL2RpcmVjdGl2ZXMvYXR0cmlidXRlLWRpcmVjdGl2ZXMuY29tcG9uZW50JztcbmltcG9ydCB7SGlnaExpZ2h0RGlyZWN0aXZlfSBmcm9tICcuL2RpcmVjdGl2ZXMvaGlnaGxpZ2h0LmRpcmVjdGl2ZSc7XG5pbXBvcnQge1N0cnVjdHVyYWxEaXJlY3RpdmVDb21wb25lbnR9IGZyb20gJy4vZGlyZWN0aXZlcy9zdHJ1Y3R1cmFsLWRpcmVjdGl2ZXMuY29tcG9uZW50JztcbmltcG9ydCB7VW5sZXNzRGlyZWN0aXZlfSBmcm9tICcuL2RpcmVjdGl2ZXMvdW5sZXNzLmRpcmVjdGl2ZSc7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8aDM+U3RyaW5nIEludGVycG9sYXRpb24gQmluZGluZzwvaDM+XG4gICAgICAgIHt7bXlUZXN0KCl9fVxuXG4gICAgICAgICAgPGlucHV0IHR5cGUgPVwidGV4dFwiIHZhbHVlPVwie3tuYW1lfX1cIiBjbGFzcz1cInt7J25ldy1zdHlsZXMnfX1cIj5cblxuICAgICAgICAgICAgPHByb3BlcnR5LWJpbmQ+PC9wcm9wZXJ0eS1iaW5kPlxuICAgICAgICAgICAgICA8ZXZlbnQtYmluZD48L2V2ZW50LWJpbmQ+XG4gICAgICAgICAgICAgICAgPHR3b3dheS1iaW5kPjwvdHdvd2F5LWJpbmQ+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICAgIDxocj5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8aDI+UHJvcGVydHkgQmluZGluZyB0byBDdXN0b20gQ29tcG9uZW50czwvaDI+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzcz1cInBhcmVudC1jb21wb25lbnRcIj5cblxuICAgICAgICAgICAgICAgIDxoMj5QYXJlbnQgQ29tcG9uZW50ITwvaDI+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImNvZGVcIj5hcHAuY29tcG9uZW50LnRzPC9wPlxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJwYXJlbnRzLWhlYWRlclwiPiBQbGVhc2UgZW50ZXIgeW91ciBjZWxlYnJpdHkgY3J1c2ggbmFtZTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgWyhuZ01vZGVsKV09XCJ0aGVOYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGJyPiAgICBcbiAgICAgICAgICAgICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzcz1cImNoaWxkLWNvbXBvbmVudFwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwcm9wZXJ0eS1jdXN0b20gW2NlbGViQ3J1c2hdPVwidGhlTmFtZVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtteUFnZV09XCIyM1wiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0aGVTcG90c1VwZGF0ZSk9XCJ0aGVTcG90cyA9ICRldmVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Byb3BlcnR5LWN1c3RvbT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicGFyZW50LWNvbXBvbmVudFwiPmEgc3BvdCBjYWxsZWQ6IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjaGlsZHMtaGVhZGVyXCI+e3t0aGVTcG90c319XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiY29kZVwiPmFwcC5jb21wb25lbnQudHM8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+ICBcbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgICAgICAgICAgIDxocj5cbiAgICAgPGgzPklucHV0IENvbXBvbmVudDwvaDM+ICAgICBcbiAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPG15LWlucHV0IChzdWJtaXR0ZWRDdXN0b20pPVwib25TdWJtaXQoJGV2ZW50KVwiIFtteXNlbGZdPVwiY29uZmlybU15c2VsZlwiPjwvbXktaW5wdXQ+XG5cblxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPG15LWNvbmZpcm0gKGNvbmZpcm1DdXN0b20pPVwib25Db25maXJtKCRldmVudClcIiBbbXlzZWxmXT1cIm15c2VsZlwiPjwvbXktY29uZmlybT5cbiAgICAgICAgICBcblxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPG15LWF0dHJpYnV0ZS1kaXJlY3RpdmU+PC9teS1hdHRyaWJ1dGUtZGlyZWN0aXZlPlxuICAgICAgICA8aHI+XG4gICAgICAgIDxoMz5TdHJ1Y3R1cmFsIERpcmVjdGl2ZXM8L2gzPlxuICAgICAgICA8bXktc3RydWN0dXJhbC1kaXJlY3RpdmU+PG15LXN0cnVjdHVyYWwtZGlyZWN0aXZlPlxuXG5cblxuICBcbiAgICBgLFxuXG4gIGRpcmVjdGl2ZXM6IFtQcm9wZXJ0eUJpbmRpbmdDb21wb25lbnQsIFxuICAgICAgICAgICAgICAgRXZlbnRCaW5kaW5nQ29tcG9uZW50LCBcbiAgICAgICAgICAgICAgIFR3b3dheUJpbmRpbmdDb21wb25lbnQsIFxuICAgICAgICAgICAgICAgQ3VzdG9tUHJvcGVydHlCaW5kaW5nQ29tcG9uZW50LCBcbiAgICAgICAgICAgICAgIElucHV0Q29tcG9uZW50LCBDb25maXJtQ29tcG9uZW50LCBcbiAgICAgICAgICAgICAgIEF0dHJpYnV0ZURpcmVjdGl2ZUNvbXBvbmVudCxcbiAgICAgICAgICAgICAgIEhpZ2hMaWdodERpcmVjdGl2ZSxcbiAgICAgICAgICAgICAgIFN0cnVjdHVyYWxEaXJlY3RpdmVDb21wb25lbnQsXG4gICAgICAgICAgICAgICBVbmxlc3NEaXJlY3RpdmVcbiAgICAgICAgICAgICAgIF1cblxufSlcblxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG5cbiAgLy9pbnB1dC1jb21wb25lbnQgb2JqZWN0c1xuICBteXNlbGYgPSB7XG4gICAgbmFtZTogJycsXG4gICAgYWdlOiAnJ1xuICB9O1xuXG4gIGNvbmZpcm1NeXNlbGYgPSB7XG4gICAgbmFtZTogJycsXG4gICAgYWdlOiAnJ1xuICB9O1xuXG4gIC8vc3VibWl0IHRoZSBkYXRhIGZyb20gdGhlIGlucHV0LWNvbXBvbmVudFxuICBvblN1Ym1pdChteXNlbGY6IHtuYW1lOiBzdHJpbmcsIGFnZTogc3RyaW5nfSkge1xuICAgIHRoaXMubXlzZWxmID0geyBuYW1lOiBteXNlbGYubmFtZSwgYWdlOiBteXNlbGYuYWdlIH0pO1xuXG4gIH1cblxuICAvL2NoZWNrIHRoZSBkYXRhXG4gIG9uQ29uZmlybShteXNlbGY6IHsgbmFtZTogc3RyaW5nLCBhZ2U6IHN0cmluZyB9KSB7XG4gICAgdGhpcy5jb25maXJtTXlzZWxmID0geyBuYW1lOiBteXNlbGYubmFtZSwgYWdlOiBteXNlbGYuYWdlIH0pO1xuXG4gIH1cblxuICAvL3BhcmVudC1jaGlkXG4gIHRoZU5hbWUgPSAnJztcbiAgdGhlU3BvdHMgPSAnJztcblxuICBteVRlc3QoKSB7XG4gICAgcmV0dXJuIDMgPT09IDE7XG4gIH1cbiAgLy9mcm9tIGZpcnN0IGJpbmRpbmdcbiAgbmFtZSA9ICdBYmVsIEJvaSc7XG5cbn1cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
