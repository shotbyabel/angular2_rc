System.register(['@angular/core', './property-binding/property-binding.component', './event-binding/event-binding.component', './twoway-binding/twoway-binding.component', './property-customBinding/custom-propertyBinding.component'], function(exports_1, context_1) {
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
    var core_1, property_binding_component_1, event_binding_component_1, twoway_binding_component_1, custom_propertyBinding_component_1;
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
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    //parent-chid
                    this.theName = '';
                    this.theSpots = '';
                    //from first binding
                    this.name = 'Abel Boi';
                }
                AppComponent.prototype.myTest = function () {
                    return 3 === 1;
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
<<<<<<< HEAD
                        template: "\n    <h3>String Interpolation Binding</h3>\n        {{myTest()}}\n\n          <input type =\"text\" value=\"{{name}}\" class=\"{{'new-styles'}}\">\n\n            <property-bind></property-bind>\n              <event-bind></event-bind>\n                <twoway-bind></twoway-bind>\n              \n              <br>\n              <hr>\n              \n            <h2>Property Binding to Custom Components</h2>\n              \n              <section class=\"parent-component\">\n\n                <h2>Parent Component!</h2>\n                  <p class=\"code\">app.component.ts</p>\n                    <h4 class=\"parents-header\"> Please enter your celebrity crush name</h4>\n                      <input type=\"text\" [(ngModel)]=\"theName\">\n                      <br>    \n                      <br>\n                        <section class=\"child-component\">\n\n                          <property-custom [celebCrush]=\"theName\" \n                                           [myAge]=\"23\" \n                                           (theSpotsUpdate)=\"theSpots = $event\">\n                          </property-custom>\n\n                            <p class=\"parent-component\">a spot called: \n                              <span class=\"childs-header\">{{theSpots}}\n                                <p class=\"code\">app.component.ts</p>\n                              </span>\n                            </p>\n\n                        </section>  \n                </section>\n  \n    ",
                        directives: [property_binding_component_1.PropertyBindingComponent, event_binding_component_1.EventBindingComponent, twoway_binding_component_1.TwowayBindingComponent, custom_propertyBinding_component_1.CustomPropertyBindingComponent]
=======
                        template: "\n    <h3>String Interpolation Binding</h3>\n              {{myTest()}}\n\n              <input type =\"text\" value=\"{{name}}\" class=\"{{'new-styles'}}\">\n\n              <property-bind></property-bind>\n              <event-bind></event-bind>\n              <twoway-bind></twoway-bind>\n              \n              <br>\n              <hr>\n              \n              <h2>Property Binding to Custom Components</h2>\n              \n                <section class=\"parent-component\">\n\n                  <h2>Parent Component!</h2>\n                    <h4> Please enter your celebrity crush name</h4>\n                      <input type=\"text\" placeholder=\"name goes here\"[(ngModel)]=\"theName\">\n                        <p class=\"code\">app.component.ts</p>\n                          \n                          <section class=\"child-component\">\n                            <property-custom [celebCrush]=\"theName\" [myAge]=\"23\"></property-custom>\n                          </section>  \n\n                 </section>\n  \n    ",
                        directives: [property_binding_component_1.PropertyBindingComponent,
                            event_binding_component_1.EventBindingComponent,
                            twoway_binding_component_1.TwowayBindingComponent,
                            custom_propertyBinding_component_1.CustomPropertyBindingComponent
                        ]
>>>>>>> 4273a8360a7e54d80f4756d5f1a8ff5426ff1be0
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

<<<<<<< HEAD
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFxREk7Z0JBQUE7b0JBRUEsYUFBYTtvQkFDWCxZQUFPLEdBQUcsRUFBRSxDQUFDO29CQUNiLGFBQVEsR0FBRyxFQUFFLENBQUM7b0JBS2hCLG9CQUFvQjtvQkFDbEIsU0FBSSxHQUFHLFVBQVUsQ0FBQztnQkFFcEIsQ0FBQztnQkFOQyw2QkFBTSxHQUFOO29CQUNFLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNqQixDQUFDO2dCQXZEUDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxRQUFRO3dCQUNsQixRQUFRLEVBQUUsbStDQXVDVDt3QkFFTCxVQUFVLEVBQUUsQ0FBQyxxREFBd0IsRUFBRSwrQ0FBcUIsRUFBRSxpREFBc0IsRUFBQyxpRUFBOEIsQ0FBQztxQkFFbkgsQ0FBQzs7Z0NBQUE7Z0JBY0UsbUJBQUM7WUFBRCxDQVpBLEFBWUMsSUFBQTtZQVpELHVDQVlDLENBQUEiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7UHJvcGVydHlCaW5kaW5nQ29tcG9uZW50fSBmcm9tICcuL3Byb3BlcnR5LWJpbmRpbmcvcHJvcGVydHktYmluZGluZy5jb21wb25lbnQnO1xuaW1wb3J0IHtFdmVudEJpbmRpbmdDb21wb25lbnR9IGZyb20gJy4vZXZlbnQtYmluZGluZy9ldmVudC1iaW5kaW5nLmNvbXBvbmVudCc7XG5pbXBvcnQge1R3b3dheUJpbmRpbmdDb21wb25lbnR9IGZyb20gJy4vdHdvd2F5LWJpbmRpbmcvdHdvd2F5LWJpbmRpbmcuY29tcG9uZW50JztcbmltcG9ydCB7Q3VzdG9tUHJvcGVydHlCaW5kaW5nQ29tcG9uZW50fSBmcm9tICcuL3Byb3BlcnR5LWN1c3RvbUJpbmRpbmcvY3VzdG9tLXByb3BlcnR5QmluZGluZy5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICA8aDM+U3RyaW5nIEludGVycG9sYXRpb24gQmluZGluZzwvaDM+XG4gICAgICAgIHt7bXlUZXN0KCl9fVxuXG4gICAgICAgICAgPGlucHV0IHR5cGUgPVwidGV4dFwiIHZhbHVlPVwie3tuYW1lfX1cIiBjbGFzcz1cInt7J25ldy1zdHlsZXMnfX1cIj5cblxuICAgICAgICAgICAgPHByb3BlcnR5LWJpbmQ+PC9wcm9wZXJ0eS1iaW5kPlxuICAgICAgICAgICAgICA8ZXZlbnQtYmluZD48L2V2ZW50LWJpbmQ+XG4gICAgICAgICAgICAgICAgPHR3b3dheS1iaW5kPjwvdHdvd2F5LWJpbmQ+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICAgIDxocj5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8aDI+UHJvcGVydHkgQmluZGluZyB0byBDdXN0b20gQ29tcG9uZW50czwvaDI+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzcz1cInBhcmVudC1jb21wb25lbnRcIj5cblxuICAgICAgICAgICAgICAgIDxoMj5QYXJlbnQgQ29tcG9uZW50ITwvaDI+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImNvZGVcIj5hcHAuY29tcG9uZW50LnRzPC9wPlxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJwYXJlbnRzLWhlYWRlclwiPiBQbGVhc2UgZW50ZXIgeW91ciBjZWxlYnJpdHkgY3J1c2ggbmFtZTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgWyhuZ01vZGVsKV09XCJ0aGVOYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGJyPiAgICBcbiAgICAgICAgICAgICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzcz1cImNoaWxkLWNvbXBvbmVudFwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwcm9wZXJ0eS1jdXN0b20gW2NlbGViQ3J1c2hdPVwidGhlTmFtZVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtteUFnZV09XCIyM1wiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0aGVTcG90c1VwZGF0ZSk9XCJ0aGVTcG90cyA9ICRldmVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Byb3BlcnR5LWN1c3RvbT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicGFyZW50LWNvbXBvbmVudFwiPmEgc3BvdCBjYWxsZWQ6IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjaGlsZHMtaGVhZGVyXCI+e3t0aGVTcG90c319XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiY29kZVwiPmFwcC5jb21wb25lbnQudHM8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+ICBcbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gIFxuICAgIGAsXG5cbmRpcmVjdGl2ZXM6IFtQcm9wZXJ0eUJpbmRpbmdDb21wb25lbnQsIEV2ZW50QmluZGluZ0NvbXBvbmVudCwgVHdvd2F5QmluZGluZ0NvbXBvbmVudCxDdXN0b21Qcm9wZXJ0eUJpbmRpbmdDb21wb25lbnRdXG5cbn0pXG5cbiAgICBleHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcblxuICAgIC8vcGFyZW50LWNoaWRcbiAgICAgIHRoZU5hbWUgPSAnJztcbiAgICAgIHRoZVNwb3RzID0gJyc7XG5cbiAgICAgIG15VGVzdCgpIHtcbiAgICAgICAgcmV0dXJuIDMgPT09IDE7XG4gICAgICB9XG4gICAgLy9mcm9tIGZpcnN0IGJpbmRpbmdcbiAgICAgIG5hbWUgPSAnQWJlbCBCb2knO1xuXG4gICAgfVxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
=======
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUE2Q0E7Z0JBQUE7b0JBRUEsYUFBYTtvQkFDWCxZQUFPLEdBQUcsRUFBRSxDQUFDO29CQUtmLG9CQUFvQjtvQkFDbEIsU0FBSSxHQUFHLFVBQVUsQ0FBQztnQkFFcEIsQ0FBQztnQkFOQyw2QkFBTSxHQUFOO29CQUNFLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNqQixDQUFDO2dCQTlDSDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxRQUFRO3dCQUNsQixRQUFRLEVBQUUsOGhDQTRCVDt3QkFFRCxVQUFVLEVBQUUsQ0FBQyxxREFBd0I7NEJBQ3hCLCtDQUFxQjs0QkFDckIsaURBQXNCOzRCQUN0QixpRUFBOEI7eUJBQzdCO3FCQUNqQixDQUFDOztnQ0FBQTtnQkFhRixtQkFBQztZQUFELENBWEEsQUFXQyxJQUFBO1lBWEQsdUNBV0MsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtQcm9wZXJ0eUJpbmRpbmdDb21wb25lbnR9IGZyb20gJy4vcHJvcGVydHktYmluZGluZy9wcm9wZXJ0eS1iaW5kaW5nLmNvbXBvbmVudCc7XG5pbXBvcnQge0V2ZW50QmluZGluZ0NvbXBvbmVudH0gZnJvbSAnLi9ldmVudC1iaW5kaW5nL2V2ZW50LWJpbmRpbmcuY29tcG9uZW50JztcbmltcG9ydCB7VHdvd2F5QmluZGluZ0NvbXBvbmVudH0gZnJvbSAnLi90d293YXktYmluZGluZy90d293YXktYmluZGluZy5jb21wb25lbnQnO1xuaW1wb3J0IHtDdXN0b21Qcm9wZXJ0eUJpbmRpbmdDb21wb25lbnR9IGZyb20gJy4vcHJvcGVydHktY3VzdG9tQmluZGluZy9jdXN0b20tcHJvcGVydHlCaW5kaW5nLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgIDxoMz5TdHJpbmcgSW50ZXJwb2xhdGlvbiBCaW5kaW5nPC9oMz5cbiAgICAgICAgICAgICAge3tteVRlc3QoKX19XG5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGUgPVwidGV4dFwiIHZhbHVlPVwie3tuYW1lfX1cIiBjbGFzcz1cInt7J25ldy1zdHlsZXMnfX1cIj5cblxuICAgICAgICAgICAgICA8cHJvcGVydHktYmluZD48L3Byb3BlcnR5LWJpbmQ+XG4gICAgICAgICAgICAgIDxldmVudC1iaW5kPjwvZXZlbnQtYmluZD5cbiAgICAgICAgICAgICAgPHR3b3dheS1iaW5kPjwvdHdvd2F5LWJpbmQ+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICAgIDxocj5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDxoMj5Qcm9wZXJ0eSBCaW5kaW5nIHRvIEN1c3RvbSBDb21wb25lbnRzPC9oMj5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJwYXJlbnQtY29tcG9uZW50XCI+XG5cbiAgICAgICAgICAgICAgICAgIDxoMj5QYXJlbnQgQ29tcG9uZW50ITwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxoND4gUGxlYXNlIGVudGVyIHlvdXIgY2VsZWJyaXR5IGNydXNoIG5hbWU8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwibmFtZSBnb2VzIGhlcmVcIlsobmdNb2RlbCldPVwidGhlTmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJjb2RlXCI+YXBwLmNvbXBvbmVudC50czwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiY2hpbGQtY29tcG9uZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHByb3BlcnR5LWN1c3RvbSBbY2VsZWJDcnVzaF09XCJ0aGVOYW1lXCIgW215QWdlXT1cIjIzXCI+PC9wcm9wZXJ0eS1jdXN0b20+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj4gIFxuXG4gICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgXG4gICAgYCxcblxuICAgIGRpcmVjdGl2ZXM6IFtQcm9wZXJ0eUJpbmRpbmdDb21wb25lbnQsIFxuICAgICAgICAgICAgICAgICBFdmVudEJpbmRpbmdDb21wb25lbnQsIFxuICAgICAgICAgICAgICAgICBUd293YXlCaW5kaW5nQ29tcG9uZW50LCBcbiAgICAgICAgICAgICAgICAgQ3VzdG9tUHJvcGVydHlCaW5kaW5nQ29tcG9uZW50XG4gICAgICAgICAgICAgICAgIF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuXG4vL3BhcmVudC1jaGlkXG4gIHRoZU5hbWUgPSAnJztcblxuICBteVRlc3QoKSB7XG4gICAgcmV0dXJuIDMgPT09IDE7XG4gIH1cbi8vZnJvbSBmaXJzdCBiaW5kaW5nXG4gIG5hbWUgPSAnQWJlbCBCb2knO1xuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
>>>>>>> 4273a8360a7e54d80f4756d5f1a8ff5426ff1be0
