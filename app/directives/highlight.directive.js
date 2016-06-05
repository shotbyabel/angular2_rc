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
                    this._renderer.setElementStyle(this._elRef, 'background-color', color);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpcmVjdGl2ZXMvaGlnaGxpZ2h0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBY0E7Z0JBSUUsNEJBQW9CLE1BQWtCLEVBQVUsU0FBbUI7b0JBQS9DLFdBQU0sR0FBTixNQUFNLENBQVk7b0JBQVUsY0FBUyxHQUFULFNBQVMsQ0FBVTtvQkFIM0Qsa0JBQWEsR0FBRyxPQUFPLENBQUM7Z0JBR3NDLENBQUM7Z0JBRXpFLHlDQUFZLEdBQVo7b0JBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDNUQsQ0FBQztnQkFDRCx5Q0FBWSxHQUFaO29CQUNFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3ZCLENBQUM7Z0JBQ08sc0NBQVMsR0FBakIsVUFBa0IsS0FBYTtvQkFDN0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxrQkFBa0IsRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFFekUsQ0FBQztnQkF4QkQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVCxRQUFRLEVBQUUsZUFBZTt3QkFDekIsTUFBTSxFQUFFLENBQUMsNEJBQTRCLENBQUM7d0JBQ3RDLElBQUksRUFBRTs0QkFDSixjQUFjLEVBQUUsZ0JBQWdCOzRCQUNoQyxjQUFjLEVBQUUsZ0JBQWdCO3lCQUNqQztxQkFFRixDQUFDOztzQ0FBQTtnQkFrQkYseUJBQUM7WUFBRCxDQWpCQSxBQWlCQyxJQUFBO1lBakJELG1EQWlCQyxDQUFBIiwiZmlsZSI6ImRpcmVjdGl2ZXMvaGlnaGxpZ2h0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RWxlbWVudFJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge09uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1JlbmRlcmVyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW215SGlnaExpZ2h0XScsXG4gIGlucHV0czogWydoaWdoTGlnaHRDb2xvcjpteUhpZ2hMaWdodCddLFxuICBob3N0OiB7XG4gICAgJyhtb3VzZWVudGVyKSc6ICdvbk1vdXNlRW50ZXIoKScsXG4gICAgJyhtb3VzZWxlYXZlKSc6ICdvbk1vdXNlTGVhdmUoKScgICAgXG4gIH1cblxufSlcbmV4cG9ydCBjbGFzcyBIaWdoTGlnaHREaXJlY3RpdmV7ICBcbiAgcHJpdmF0ZSBfZGVmYXVsdENvbG9yID0gJ2dyZWVuJztcbiAgaGlnaExpZ2h0Q29sb3I6IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyKSB7fVxuXG5vbk1vdXNlRW50ZXIoKXtcbiAgdGhpcy5oaWdobGlnaHQodGhpcy5oaWdoTGlnaHRDb2xvciB8fCB0aGlzLl9kZWZhdWx0Q29sb3IpO1xufVxub25Nb3VzZUxlYXZlKCl7XG4gIHRoaXMuaGlnaGxpZ2h0KG51bGwpO1xufVxucHJpdmF0ZSBoaWdobGlnaHQoY29sb3I6IHN0cmluZykge1xuICB0aGlzLl9yZW5kZXJlci5zZXRFbGVtZW50U3R5bGUodGhpcy5fZWxSZWYsICdiYWNrZ3JvdW5kLWNvbG9yJywgY29sb3IpO1xuXG59XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
