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
    var TwowayBindingComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            TwowayBindingComponent = (function () {
                function TwowayBindingComponent() {
                    this.nickName = '';
                    this.values = '';
                    this.friendName = 'Nikki';
                }
                TwowayBindingComponent.prototype.twowayTest = function () {
                    return 0 === 0;
                };
                TwowayBindingComponent = __decorate([
                    core_1.Component({
                        selector: 'twoway-bind',
                        template: "\n<hr>\n<br>\n<br>\n<h3>Two-Way Binding</h3>\n<br>\n<p>data binding both ways.</p>\n\n              {{twowayTest()}}\n\n              <input type=\"text\" [(ngModel)]=\"friendName\" placeholder=\"enter friend name..\">\n              <p>Your friends name: {{friendName}}</p>\n\n\n  ",
                    }), 
                    __metadata('design:paramtypes', [])
                ], TwowayBindingComponent);
                return TwowayBindingComponent;
            }());
            exports_1("TwowayBindingComponent", TwowayBindingComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInR3b3dheS1iaW5kaW5nL3R3b3dheS1iaW5kaW5nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXVCQTtnQkFBQTtvQkFFRSxhQUFRLEdBQUcsRUFBRSxDQUFDO29CQUNkLFdBQU0sR0FBRyxFQUFFLENBQUM7b0JBQ1osZUFBVSxHQUFHLE9BQU8sQ0FBQztnQkFNdkIsQ0FBQztnQkFKQywyQ0FBVSxHQUFWO29CQUNFLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNqQixDQUFDO2dCQTdCSDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNULFFBQVEsRUFBRSxhQUFhO3dCQUN2QixRQUFRLEVBQUUsNFJBY1Q7cUJBR0YsQ0FBQzs7MENBQUE7Z0JBWUYsNkJBQUM7WUFBRCxDQVZBLEFBVUMsSUFBQTtZQVZELDJEQVVDLENBQUEiLCJmaWxlIjoidHdvd2F5LWJpbmRpbmcvdHdvd2F5LWJpbmRpbmcuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0d293YXktYmluZCcsXG4gIHRlbXBsYXRlOiBgXG48aHI+XG48YnI+XG48YnI+XG48aDM+VHdvLVdheSBCaW5kaW5nPC9oMz5cbjxicj5cbjxwPmRhdGEgYmluZGluZyBib3RoIHdheXMuPC9wPlxuXG4gICAgICAgICAgICAgIHt7dHdvd2F5VGVzdCgpfX1cblxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBbKG5nTW9kZWwpXT1cImZyaWVuZE5hbWVcIiBwbGFjZWhvbGRlcj1cImVudGVyIGZyaWVuZCBuYW1lLi5cIj5cbiAgICAgICAgICAgICAgPHA+WW91ciBmcmllbmRzIG5hbWU6IHt7ZnJpZW5kTmFtZX19PC9wPlxuXG5cbiAgYCxcblxuXG59KVxuXG5leHBvcnQgY2xhc3MgVHdvd2F5QmluZGluZ0NvbXBvbmVudCB7XG5cbiAgbmlja05hbWUgPSAnJztcbiAgdmFsdWVzID0gJyc7XG4gIGZyaWVuZE5hbWUgPSAnTmlra2knO1xuXG4gIHR3b3dheVRlc3QoKSB7XG4gICAgcmV0dXJuIDAgPT09IDA7XG4gIH1cblxufVxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
