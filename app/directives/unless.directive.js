System.register(["@angular/core"], function(exports_1, context_1) {
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
    var core_1, core_2, core_3;
    var UnlessDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
                core_3 = core_1_1;
            }],
        execute: function() {
            UnlessDirective = (function () {
                // constructor(private _templateRef: TemplateRef, private _viewContainerRef: ViewContainerRef){}  
                function UnlessDirective(_templateRef, _viewContainerRef) {
                    this._templateRef = _templateRef;
                    this._viewContainerRef = _viewContainerRef;
                }
                Object.defineProperty(UnlessDirective.prototype, "myUnless", {
                    set: function (condition) {
                        if (!condition) {
                            this._viewContainerRef.createEmbeddedView(this._templateRef);
                        }
                        else {
                            this._viewContainerRef.clear();
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                UnlessDirective = __decorate([
                    core_1.Directive({
                        selector: '[myUnless]',
                        inputs: ['myUnless']
                    }), 
                    __metadata('design:paramtypes', [core_2.TemplateRef, core_3.ViewContainerRef])
                ], UnlessDirective);
                return UnlessDirective;
            }());
            exports_1("UnlessDirective", UnlessDirective);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpcmVjdGl2ZXMvdW5sZXNzLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBVUE7Z0JBRUUsa0dBQWtHO2dCQUNwRyx5QkFBb0IsWUFBeUIsRUFBVSxpQkFBbUM7b0JBQXRFLGlCQUFZLEdBQVosWUFBWSxDQUFhO29CQUFVLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7Z0JBQUcsQ0FBQztnQkFFNUYsc0JBQUkscUNBQVE7eUJBQVosVUFBYSxTQUFrQjt3QkFDN0IsRUFBRSxDQUFBLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDOzRCQUNkLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7d0JBRS9ELENBQUM7d0JBQUMsSUFBSSxDQUFDLENBQUM7NEJBQ04sSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssRUFBRSxDQUFDO3dCQUNqQyxDQUFDO29CQUNILENBQUM7OzttQkFBQTtnQkFsQkg7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFFVCxRQUFRLEVBQUUsWUFBWTt3QkFDdEIsTUFBTSxFQUFFLENBQUMsVUFBVSxDQUFDO3FCQUVyQixDQUFDOzttQ0FBQTtnQkFjRixzQkFBQztZQUFELENBYkEsQUFhQyxJQUFBO1lBYkQsNkNBYUMsQ0FBQSIsImZpbGUiOiJkaXJlY3RpdmVzL3VubGVzcy5kaXJlY3RpdmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7VGVtcGxhdGVSZWZ9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1ZpZXdDb250YWluZXJSZWZ9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBEaXJlY3RpdmUoe1xuXG4gIHNlbGVjdG9yOiAnW215VW5sZXNzXScsXG4gIGlucHV0czogWydteVVubGVzcyddXG5cbn0pXG5leHBvcnQgY2xhc3MgVW5sZXNzRGlyZWN0aXZlIHtcblxuICAvLyBjb25zdHJ1Y3Rvcihwcml2YXRlIF90ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWYsIHByaXZhdGUgX3ZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYpe30gIFxuY29uc3RydWN0b3IocHJpdmF0ZSBfdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmLCBwcml2YXRlIF92aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmKSB7fVxuXG4gIHNldCBteVVubGVzcyhjb25kaXRpb246IGJvb2xlYW4pIHtcbiAgICBpZighY29uZGl0aW9uKSB7XG4gICAgICB0aGlzLl92aWV3Q29udGFpbmVyUmVmLmNyZWF0ZUVtYmVkZGVkVmlldyh0aGlzLl90ZW1wbGF0ZVJlZik7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fdmlld0NvbnRhaW5lclJlZi5jbGVhcigpO1xuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
