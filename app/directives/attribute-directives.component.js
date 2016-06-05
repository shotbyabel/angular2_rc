System.register(['@angular/core', './highlight.directive'], function(exports_1, context_1) {
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
    var core_1, highlight_directive_1;
    var AttributeDirectiveComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (highlight_directive_1_1) {
                highlight_directive_1 = highlight_directive_1_1;
            }],
        execute: function() {
            AttributeDirectiveComponent = (function () {
                function AttributeDirectiveComponent() {
                }
                AttributeDirectiveComponent = __decorate([
                    core_1.Component({
                        selector: 'my-attribute-directive',
                        template: "\n\n    <div [myHighLight]=\"'red'\">\n        I am supposed to be RED\n    </div>\n\n    <div [myHighLight]=\"'blue'\">\n    I am supposed to be BLUE...\n    </div>\n\n  ",
                        directives: [highlight_directive_1.HighLightDirective]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AttributeDirectiveComponent);
                return AttributeDirectiveComponent;
            }());
            exports_1("AttributeDirectiveComponent", AttributeDirectiveComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpcmVjdGl2ZXMvYXR0cmlidXRlLWRpcmVjdGl2ZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBb0JBO2dCQUFBO2dCQUVBLENBQUM7Z0JBbkJEO29CQUFDLGdCQUFTLENBQUM7d0JBQ1QsUUFBUSxFQUFFLHdCQUF3Qjt3QkFDbEMsUUFBUSxFQUFFLDZLQVVUO3dCQUNELFVBQVUsRUFBRSxDQUFDLHdDQUFrQixDQUFDO3FCQUNqQyxDQUFDOzsrQ0FBQTtnQkFLRixrQ0FBQztZQUFELENBRkEsQUFFQyxJQUFBO1lBRkQscUVBRUMsQ0FBQSIsImZpbGUiOiJkaXJlY3RpdmVzL2F0dHJpYnV0ZS1kaXJlY3RpdmVzLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SGlnaExpZ2h0RGlyZWN0aXZlfSBmcm9tICcuL2hpZ2hsaWdodC5kaXJlY3RpdmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdteS1hdHRyaWJ1dGUtZGlyZWN0aXZlJyxcbiAgdGVtcGxhdGU6IGBcblxuICAgIDxkaXYgW215SGlnaExpZ2h0XT1cIidyZWQnXCI+XG4gICAgICAgIEkgYW0gc3VwcG9zZWQgdG8gYmUgUkVEXG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IFtteUhpZ2hMaWdodF09XCInYmx1ZSdcIj5cbiAgICBJIGFtIHN1cHBvc2VkIHRvIGJlIEJMVUUuLi5cbiAgICA8L2Rpdj5cblxuICBgLFxuICBkaXJlY3RpdmVzOiBbSGlnaExpZ2h0RGlyZWN0aXZlXVxufSlcblxuXG5leHBvcnQgY2xhc3MgQXR0cmlidXRlRGlyZWN0aXZlQ29tcG9uZW50IHtcblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
