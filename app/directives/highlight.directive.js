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
    var core_1, core_2, core_3;
    var HighLightDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
                core_3 = core_1_1;
            }],
        execute: function() {
            HighLightDirective = (function () {
                function HighLightDirective(_elRef, _renderer) {
                    this._elRef = _elRef;
                    this._renderer = _renderer;
                    this._defaultColor = 'green';
                }
                HighLightDirective.prototype.onMouseEnter = function () {
                    this.highlight(this.highLightColor || this._defaultColor);
                };
                HighLightDirective.prototype.onMouseLeave = function () {
                    this.highlight(null);
                };
                HighLightDirective.prototype.highlight = function (color) {
                    this._renderer.setElementStyle(this._elRef.nativeElement, 'background-color', color);
                };
                HighLightDirective = __decorate([
                    core_1.Directive({
                        selector: '[myHighLight]',
                        inputs: ['highLightColor:myHighLight'],
                        host: {
                            '(mouseenter)': 'onMouseEnter()',
                            '(mouseleave)': 'onMouseLeave()'
                        }
                    }), 
                    __metadata('design:paramtypes', [core_2.ElementRef, core_3.Renderer])
                ], HighLightDirective);
                return HighLightDirective;
            }());
            exports_1("HighLightDirective", HighLightDirective);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpcmVjdGl2ZXMvaGlnaGxpZ2h0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBY0E7Z0JBSUUsNEJBQW9CLE1BQWtCLEVBQVUsU0FBbUI7b0JBQS9DLFdBQU0sR0FBTixNQUFNLENBQVk7b0JBQVUsY0FBUyxHQUFULFNBQVMsQ0FBVTtvQkFIM0Qsa0JBQWEsR0FBRyxPQUFPLENBQUM7Z0JBR3NDLENBQUM7Z0JBRXpFLHlDQUFZLEdBQVo7b0JBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDNUQsQ0FBQztnQkFDRCx5Q0FBWSxHQUFaO29CQUNFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3ZCLENBQUM7Z0JBQ08sc0NBQVMsR0FBakIsVUFBa0IsS0FBYTtvQkFDN0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBRXZGLENBQUM7Z0JBeEJEO29CQUFDLGdCQUFTLENBQUM7d0JBQ1QsUUFBUSxFQUFFLGVBQWU7d0JBQ3pCLE1BQU0sRUFBRSxDQUFDLDRCQUE0QixDQUFDO3dCQUN0QyxJQUFJLEVBQUU7NEJBQ0osY0FBYyxFQUFFLGdCQUFnQjs0QkFDaEMsY0FBYyxFQUFFLGdCQUFnQjt5QkFDakM7cUJBRUYsQ0FBQzs7c0NBQUE7Z0JBa0JGLHlCQUFDO1lBQUQsQ0FqQkEsQUFpQkMsSUFBQTtZQWpCRCxtREFpQkMsQ0FBQSIsImZpbGUiOiJkaXJlY3RpdmVzL2hpZ2hsaWdodC5kaXJlY3RpdmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0VsZW1lbnRSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtSZW5kZXJlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tteUhpZ2hMaWdodF0nLFxuICBpbnB1dHM6IFsnaGlnaExpZ2h0Q29sb3I6bXlIaWdoTGlnaHQnXSxcbiAgaG9zdDoge1xuICAgICcobW91c2VlbnRlciknOiAnb25Nb3VzZUVudGVyKCknLFxuICAgICcobW91c2VsZWF2ZSknOiAnb25Nb3VzZUxlYXZlKCknICAgIFxuICB9XG5cbn0pXG5leHBvcnQgY2xhc3MgSGlnaExpZ2h0RGlyZWN0aXZleyAgXG4gIHByaXZhdGUgX2RlZmF1bHRDb2xvciA9ICdncmVlbic7XG4gIGhpZ2hMaWdodENvbG9yOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcikge31cblxub25Nb3VzZUVudGVyKCl7XG4gIHRoaXMuaGlnaGxpZ2h0KHRoaXMuaGlnaExpZ2h0Q29sb3IgfHwgdGhpcy5fZGVmYXVsdENvbG9yKTtcbn1cbm9uTW91c2VMZWF2ZSgpe1xuICB0aGlzLmhpZ2hsaWdodChudWxsKTtcbn1cbnByaXZhdGUgaGlnaGxpZ2h0KGNvbG9yOiBzdHJpbmcpIHtcbiAgdGhpcy5fcmVuZGVyZXIuc2V0RWxlbWVudFN0eWxlKHRoaXMuX2VsUmVmLm5hdGl2ZUVsZW1lbnQsICdiYWNrZ3JvdW5kLWNvbG9yJywgY29sb3IpO1xuXG59XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
