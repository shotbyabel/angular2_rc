System.register(['@angular/core', './unless.directive'], function(exports_1, context_1) {
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
    var core_1, unless_directive_1;
    var StructuralDirectiveComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (unless_directive_1_1) {
                unless_directive_1 = unless_directive_1_1;
            }],
        execute: function() {
            StructuralDirectiveComponent = (function () {
                function StructuralDirectiveComponent() {
                    this.list = ["Abel", "Nikki", "Maiu", "Alexandrov", "Kobe"];
                }
                StructuralDirectiveComponent = __decorate([
                    core_1.Component({
                        selector: 'my-structural-directive',
                        template: "\n    <section class=\"directive\">\n      <h2>*ngIf</h2>\n        <div>\n          Enter a number higher than 10\n          <br>\n          <input type=\"text\" #number (keyup)=\"0\">\n        </div>\n        \n        <div *ngIf=\"number.value > 10\">\n          Number is greater than 10\n        </div>  \n    </section>\n<br>\n    <section class=\"directive-two\">\n      <h2>*ngFor</h2>\n        <div>\n          <ul>\n            <li *ngFor=\"let item of list\">\n              {{item}}\n            </li>\n          </ul>\n        </div>\n    </section>\n<br>\n    <section class=\"directive-three\">\n      <h2>[ngSwitch]</h2>\n        <div>\n          Enter red, blue or green\n          <br>\n          <input type=\"text\" #color (keyup)=\"0\">\n        </div>\n\n        <div [ngSwitch]=\"color.value\">\n\n          <template [ngSwitchWhen]=\"'red'\"><span style=\"color: red\">Color is RED</span></template>\n          <template [ngSwitchWhen]=\"'blue'\"><span style=\"color: blue\">Color is blue</span></template>\n          <template [ngSwitchWhen]=\"'green'\"><span style=\"color: green\">Color is GReeN</span></template>\n          <template ngSwitchDefault><span>unknown color o_O</span></template>\n\n        </div>\n    </section>\n<br>\n    <section class=\"directive\">\n      <h2>Custom Directive: *myUnless</h2>\n        <div>\n          Enter True or False\n          <br>\n          <input type=\"text\" #condition (keyup)=\"0\">\n        </div>\n        <div *myUnless=\"condition.value != 'false'\">\n          ONLY show if 'false' was entered\n        </div>  \n    </section>    \n  ",
                        directives: [unless_directive_1.UnlessDirective]
                    }), 
                    __metadata('design:paramtypes', [])
                ], StructuralDirectiveComponent);
                return StructuralDirectiveComponent;
            }());
            exports_1("StructuralDirectiveComponent", StructuralDirectiveComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpcmVjdGl2ZXMvc3RydWN0dXJhbC1kaXJlY3RpdmVzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWtFQTtnQkFBQTtvQkFFRSxTQUFJLEdBQUcsQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxDQUFDLENBQUM7Z0JBRXpELENBQUM7Z0JBakVEO29CQUFDLGdCQUFTLENBQUM7d0JBQ1QsUUFBUSxFQUFFLHlCQUF5Qjt3QkFDbkMsUUFBUSxFQUFFLGlsREFzRFQ7d0JBQ0QsVUFBVSxFQUFFLENBQUMsa0NBQWUsQ0FBQztxQkFDOUIsQ0FBQzs7Z0RBQUE7Z0JBT0YsbUNBQUM7WUFBRCxDQUpBLEFBSUMsSUFBQTtZQUpELHVFQUlDLENBQUEiLCJmaWxlIjoiZGlyZWN0aXZlcy9zdHJ1Y3R1cmFsLWRpcmVjdGl2ZXMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtVbmxlc3NEaXJlY3RpdmV9IGZyb20gJy4vdW5sZXNzLmRpcmVjdGl2ZSc7XG5cblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdteS1zdHJ1Y3R1cmFsLWRpcmVjdGl2ZScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJkaXJlY3RpdmVcIj5cbiAgICAgIDxoMj4qbmdJZjwvaDI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgRW50ZXIgYSBudW1iZXIgaGlnaGVyIHRoYW4gMTBcbiAgICAgICAgICA8YnI+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI251bWJlciAoa2V5dXApPVwiMFwiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgIDxkaXYgKm5nSWY9XCJudW1iZXIudmFsdWUgPiAxMFwiPlxuICAgICAgICAgIE51bWJlciBpcyBncmVhdGVyIHRoYW4gMTBcbiAgICAgICAgPC9kaXY+ICBcbiAgICA8L3NlY3Rpb24+XG48YnI+XG4gICAgPHNlY3Rpb24gY2xhc3M9XCJkaXJlY3RpdmUtdHdvXCI+XG4gICAgICA8aDI+Km5nRm9yPC9oMj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICA8bGkgKm5nRm9yPVwibGV0IGl0ZW0gb2YgbGlzdFwiPlxuICAgICAgICAgICAgICB7e2l0ZW19fVxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG48YnI+XG4gICAgPHNlY3Rpb24gY2xhc3M9XCJkaXJlY3RpdmUtdGhyZWVcIj5cbiAgICAgIDxoMj5bbmdTd2l0Y2hdPC9oMj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICBFbnRlciByZWQsIGJsdWUgb3IgZ3JlZW5cbiAgICAgICAgICA8YnI+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI2NvbG9yIChrZXl1cCk9XCIwXCI+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgW25nU3dpdGNoXT1cImNvbG9yLnZhbHVlXCI+XG5cbiAgICAgICAgICA8dGVtcGxhdGUgW25nU3dpdGNoV2hlbl09XCIncmVkJ1wiPjxzcGFuIHN0eWxlPVwiY29sb3I6IHJlZFwiPkNvbG9yIGlzIFJFRDwvc3Bhbj48L3RlbXBsYXRlPlxuICAgICAgICAgIDx0ZW1wbGF0ZSBbbmdTd2l0Y2hXaGVuXT1cIidibHVlJ1wiPjxzcGFuIHN0eWxlPVwiY29sb3I6IGJsdWVcIj5Db2xvciBpcyBibHVlPC9zcGFuPjwvdGVtcGxhdGU+XG4gICAgICAgICAgPHRlbXBsYXRlIFtuZ1N3aXRjaFdoZW5dPVwiJ2dyZWVuJ1wiPjxzcGFuIHN0eWxlPVwiY29sb3I6IGdyZWVuXCI+Q29sb3IgaXMgR1JlZU48L3NwYW4+PC90ZW1wbGF0ZT5cbiAgICAgICAgICA8dGVtcGxhdGUgbmdTd2l0Y2hEZWZhdWx0PjxzcGFuPnVua25vd24gY29sb3Igb19PPC9zcGFuPjwvdGVtcGxhdGU+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuPGJyPlxuICAgIDxzZWN0aW9uIGNsYXNzPVwiZGlyZWN0aXZlXCI+XG4gICAgICA8aDI+Q3VzdG9tIERpcmVjdGl2ZTogKm15VW5sZXNzPC9oMj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICBFbnRlciBUcnVlIG9yIEZhbHNlXG4gICAgICAgICAgPGJyPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICNjb25kaXRpb24gKGtleXVwKT1cIjBcIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgKm15VW5sZXNzPVwiY29uZGl0aW9uLnZhbHVlICE9ICdmYWxzZSdcIj5cbiAgICAgICAgICBPTkxZIHNob3cgaWYgJ2ZhbHNlJyB3YXMgZW50ZXJlZFxuICAgICAgICA8L2Rpdj4gIFxuICAgIDwvc2VjdGlvbj4gICAgXG4gIGAsXG4gIGRpcmVjdGl2ZXM6IFtVbmxlc3NEaXJlY3RpdmVdXG59KVxuXG5cbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmFsRGlyZWN0aXZlQ29tcG9uZW50IHtcblxuICBsaXN0ID0gW1wiQWJlbFwiLCBcIk5pa2tpXCIsIFwiTWFpdVwiLCBcIkFsZXhhbmRyb3ZcIiwgXCJLb2JlXCJdO1xuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
