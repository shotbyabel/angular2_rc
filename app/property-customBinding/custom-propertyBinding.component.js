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
                        inputs: ['celebCrush']
                    }), 
                    __metadata('design:paramtypes', [])
                ], CustomPropertyBindingComponent);
                return CustomPropertyBindingComponent;
            }());
            exports_1("CustomPropertyBindingComponent", CustomPropertyBindingComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3BlcnR5LWN1c3RvbUJpbmRpbmcvY3VzdG9tLXByb3BlcnR5QmluZGluZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBaUJBO2dCQUFBO29CQUVFLGVBQVUsR0FBRyxFQUFFLENBQUM7b0JBQ0EsUUFBRyxHQUFHLEVBQUUsQ0FBQztnQkFFM0IsQ0FBQztnQkFGQztvQkFBQyxZQUFLLENBQUMsT0FBTyxDQUFDOzsyRUFBQTtnQkFqQmpCO29CQUFDLGdCQUFTLENBQUM7d0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjt3QkFDM0IsUUFBUSxFQUFFLHdKQU9UO3dCQUNILE1BQU0sRUFBRSxDQUFDLFlBQVksQ0FBQztxQkFFckIsQ0FBQzs7a0RBQUE7Z0JBT0YscUNBQUM7WUFBRCxDQUxBLEFBS0MsSUFBQTtZQUxELDJFQUtDLENBQUEiLCJmaWxlIjoicHJvcGVydHktY3VzdG9tQmluZGluZy9jdXN0b20tcHJvcGVydHlCaW5kaW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwcm9wZXJ0eS1jdXN0b20nLFxuICB0ZW1wbGF0ZTogYFxuXG48aDM+Q2hpbGQgQ29tcG9uZW50PC9oMz5cbjxicj5cbjxwIGNsYXNzPVwiY29kZVwiPmN1c3RvbS1wcm9wZXJ0eUJpbmRpbmcuY29tcG9uZW50LnRzPC9wPlxuPHA+SG9vb2xhIHt7Y2VsZWJDcnVzaH19IGFuZCBteSBhZ2UgaXMge3thZ2V9fTxwPlxuXG4gIGAsXG5pbnB1dHM6IFsnY2VsZWJDcnVzaCddXG5cbn0pXG5cbmV4cG9ydCBjbGFzcyBDdXN0b21Qcm9wZXJ0eUJpbmRpbmdDb21wb25lbnQge1xuXG4gIGNlbGViQ3J1c2ggPSAnJztcbiAgQElucHV0KCdteUFnZScpIGFnZSA9IDM0O1xuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
