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
                }
                __decorate([
                    core_2.Input('myAge'), 
                    __metadata('design:type', Object)
                ], CustomPropertyBindingComponent.prototype, "age", void 0);
                CustomPropertyBindingComponent = __decorate([
                    core_1.Component({
                        selector: 'property-custom',
                        template: "\n\n<h3>Child Component</h3>\n<br>\n<p class=\"code\">custom-propertyBinding.component.ts</p>\n<p>Hooola {{celebCrush}} and my age is {{age}}<p>\n\n  ",
                        inputs: ['name: celebCrush']
                    }), 
                    __metadata('design:paramtypes', [])
                ], CustomPropertyBindingComponent);
                return CustomPropertyBindingComponent;
            }());
            exports_1("CustomPropertyBindingComponent", CustomPropertyBindingComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3BlcnR5LWN1c3RvbUJpbmRpbmcvY3VzdG9tLXByb3BlcnR5QmluZGluZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBaUJBO2dCQUFBO29CQUVFLGVBQVUsR0FBRyxFQUFFLENBQUM7b0JBQ0EsUUFBRyxHQUFHLEVBQUUsQ0FBQztnQkFFM0IsQ0FBQztnQkFGQztvQkFBQyxZQUFLLENBQUMsT0FBTyxDQUFDOzsyRUFBQTtnQkFqQmpCO29CQUFDLGdCQUFTLENBQUM7d0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjt3QkFDM0IsUUFBUSxFQUFFLHdKQU9UO3dCQUNILE1BQU0sRUFBRSxDQUFDLGtCQUFrQixDQUFDO3FCQUUzQixDQUFDOztrREFBQTtnQkFPRixxQ0FBQztZQUFELENBTEEsQUFLQyxJQUFBO1lBTEQsMkVBS0MsQ0FBQSIsImZpbGUiOiJwcm9wZXJ0eS1jdXN0b21CaW5kaW5nL2N1c3RvbS1wcm9wZXJ0eUJpbmRpbmcuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3Byb3BlcnR5LWN1c3RvbScsXG4gIHRlbXBsYXRlOiBgXG5cbjxoMz5DaGlsZCBDb21wb25lbnQ8L2gzPlxuPGJyPlxuPHAgY2xhc3M9XCJjb2RlXCI+Y3VzdG9tLXByb3BlcnR5QmluZGluZy5jb21wb25lbnQudHM8L3A+XG48cD5Ib29vbGEge3tjZWxlYkNydXNofX0gYW5kIG15IGFnZSBpcyB7e2FnZX19PHA+XG5cbiAgYCxcbmlucHV0czogWyduYW1lOiBjZWxlYkNydXNoJ11cblxufSlcblxuZXhwb3J0IGNsYXNzIEN1c3RvbVByb3BlcnR5QmluZGluZ0NvbXBvbmVudCB7XG5cbiAgY2VsZWJDcnVzaCA9ICcnO1xuICBASW5wdXQoJ215QWdlJykgYWdlID0gMzQ7XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
