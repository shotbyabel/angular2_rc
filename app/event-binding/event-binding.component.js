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
    var core_1;
    var EventBindingComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            EventBindingComponent = (function () {
                function EventBindingComponent() {
                    this.nickName = 'kimono';
                }
                EventBindingComponent.prototype.coolTest = function () {
                    return 0 === 8;
                };
                EventBindingComponent = __decorate([
                    core_1.Component({
                        selector: 'event-bind',
                        template: "\n<hr>\n<br>\n<br>\n<h3>Event Binding</h3>\n<br>\n<p>Binding to events.</p>\n\n  ",
                    }), 
                    __metadata('design:paramtypes', [])
                ], EventBindingComponent);
                return EventBindingComponent;
            }());
            exports_1("EventBindingComponent", EventBindingComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50LWJpbmRpbmcvZXZlbnQtYmluZGluZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFpQkE7Z0JBQUE7b0JBR0UsYUFBUSxHQUFHLFFBQVEsQ0FBQztnQkFPdEIsQ0FBQztnQkFMQyx3Q0FBUSxHQUFSO29CQUNFLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNqQixDQUFDO2dCQXRCSDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNULFFBQVEsRUFBRSxZQUFZO3dCQUN0QixRQUFRLEVBQUUsbUZBUVQ7cUJBR0YsQ0FBQzs7eUNBQUE7Z0JBWUYsNEJBQUM7WUFBRCxDQVZBLEFBVUMsSUFBQTtZQVZELHlEQVVDLENBQUEiLCJmaWxlIjoiZXZlbnQtYmluZGluZy9ldmVudC1iaW5kaW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZXZlbnQtYmluZCcsXG4gIHRlbXBsYXRlOiBgXG48aHI+XG48YnI+XG48YnI+XG48aDM+RXZlbnQgQmluZGluZzwvaDM+XG48YnI+XG48cD5CaW5kaW5nIHRvIGV2ZW50cy48L3A+XG5cbiAgYCxcblxuXG59KVxuXG5leHBvcnQgY2xhc3MgRXZlbnRCaW5kaW5nQ29tcG9uZW50IHtcblxuXG4gIG5pY2tOYW1lID0gJ2tpbW9ubyc7XG5cbiAgY29vbFRlc3QoKSB7XG4gICAgcmV0dXJuIDAgPT09IDg7XG4gIH1cblxuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
