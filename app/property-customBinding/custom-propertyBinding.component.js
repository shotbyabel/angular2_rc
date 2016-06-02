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
    var core_1, core_2;
    var CustomPropertyBindingComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            }],
        execute: function() {
            CustomPropertyBindingComponent = (function () {
                function CustomPropertyBindingComponent() {
                    this.celebCrush = '';
                    this.age = 34;
                    this.theSpotsUpdate = new core_1.EventEmitter();
                }
                CustomPropertyBindingComponent.prototype.onThespotsUpdate = function (spots) {
                    this.theSpotsUpdate.emit(spots);
                };
                __decorate([
                    core_2.Input('myAge'), 
                    __metadata('design:type', Object)
                ], CustomPropertyBindingComponent.prototype, "age", void 0);
                CustomPropertyBindingComponent = __decorate([
                    core_1.Component({
                        selector: 'property-custom',
                        template: "\n\n  <h3>Child Component</h3>\n    <p class=\"code\">custom-propertyBinding.component.ts</p>\n      <p>Hola! <span class=\"parents-header\">{{celebCrush}}</span> and my age is {{age}}<p>\n       \n       <h4 class=\"childs-header\">Spots I want to take them</h4>\n          <input type=\"text\" (keyup)=\"onThespotsUpdate(spots.value)\" #spots>\n      \n  ",
                        inputs: ['celebCrush'],
                        outputs: ['theSpotsUpdate']
                    }), 
                    __metadata('design:paramtypes', [])
                ], CustomPropertyBindingComponent);
                return CustomPropertyBindingComponent;
            }());
            exports_1("CustomPropertyBindingComponent", CustomPropertyBindingComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3BlcnR5LWN1c3RvbUJpbmRpbmcvY3VzdG9tLXByb3BlcnR5QmluZGluZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBcUJJO2dCQUFBO29CQUVFLGVBQVUsR0FBRyxFQUFFLENBQUM7b0JBQ0EsUUFBRyxHQUFHLEVBQUUsQ0FBQztvQkFDekIsbUJBQWMsR0FBRyxJQUFJLG1CQUFZLEVBQVUsQ0FBQztnQkFPOUMsQ0FBQztnQkFMRCx5REFBZ0IsR0FBaEIsVUFBaUIsS0FBYTtvQkFDNUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBRWhDLENBQUM7Z0JBTkQ7b0JBQUMsWUFBSyxDQUFDLE9BQU8sQ0FBQzs7MkVBQUE7Z0JBckJyQjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNULFFBQVEsRUFBRSxpQkFBaUI7d0JBQzNCLFFBQVEsRUFBRSx1V0FTVDt3QkFFSCxNQUFNLEVBQUUsQ0FBQyxZQUFZLENBQUM7d0JBQ3RCLE9BQU8sRUFBRSxDQUFDLGdCQUFnQixDQUFDO3FCQUUxQixDQUFDOztrREFBQTtnQkFhRSxxQ0FBQztZQUFELENBWEEsQUFXQyxJQUFBO1lBWEQsMkVBV0MsQ0FBQSIsImZpbGUiOiJwcm9wZXJ0eS1jdXN0b21CaW5kaW5nL2N1c3RvbS1wcm9wZXJ0eUJpbmRpbmcuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0lucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncHJvcGVydHktY3VzdG9tJyxcbiAgdGVtcGxhdGU6IGBcblxuICA8aDM+Q2hpbGQgQ29tcG9uZW50PC9oMz5cbiAgICA8cCBjbGFzcz1cImNvZGVcIj5jdXN0b20tcHJvcGVydHlCaW5kaW5nLmNvbXBvbmVudC50czwvcD5cbiAgICAgIDxwPkhvbGEhIDxzcGFuIGNsYXNzPVwicGFyZW50cy1oZWFkZXJcIj57e2NlbGViQ3J1c2h9fTwvc3Bhbj4gYW5kIG15IGFnZSBpcyB7e2FnZX19PHA+XG4gICAgICAgXG4gICAgICAgPGg0IGNsYXNzPVwiY2hpbGRzLWhlYWRlclwiPlNwb3RzIEkgd2FudCB0byB0YWtlIHRoZW08L2g0PlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIChrZXl1cCk9XCJvblRoZXNwb3RzVXBkYXRlKHNwb3RzLnZhbHVlKVwiICNzcG90cz5cbiAgICAgIFxuICBgLFxuXG5pbnB1dHM6IFsnY2VsZWJDcnVzaCddLFxub3V0cHV0czogWyd0aGVTcG90c1VwZGF0ZSddXG5cbn0pXG5cbiAgICBleHBvcnQgY2xhc3MgQ3VzdG9tUHJvcGVydHlCaW5kaW5nQ29tcG9uZW50IHtcblxuICAgICAgY2VsZWJDcnVzaCA9ICcnO1xuICAgICAgQElucHV0KCdteUFnZScpIGFnZSA9IDM0O1xuICAgICAgdGhlU3BvdHNVcGRhdGUgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICAgIG9uVGhlc3BvdHNVcGRhdGUoc3BvdHM6IHN0cmluZykge1xuICAgICAgdGhpcy50aGVTcG90c1VwZGF0ZS5lbWl0KHNwb3RzKTtcblxuICAgICAgfVxuXG4gICAgfSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
