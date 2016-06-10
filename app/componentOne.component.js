System.register(['@angular/core', "./services/logging.service"], function(exports_1, context_1) {
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
    var core_1, logging_service_1;
    var ComponentOneComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (logging_service_1_1) {
                logging_service_1 = logging_service_1_1;
            }],
        execute: function() {
            ComponentOneComponent = (function () {
                //inject our loggin service here
                function ComponentOneComponent(_loggingService) {
                    this._loggingService = _loggingService;
                }
                ComponentOneComponent.prototype.onLog = function (message) {
                    this._loggingService.log(message);
                };
                ComponentOneComponent = __decorate([
                    core_1.Component({
                        selector: 'component-one',
                        template: "\n\n    <input type=\"text\" #message>\n    <button (click)=\"onLog(message.value)\">SEND</button>\n\n",
                        providers: [logging_service_1.LoggingService]
                    }), 
                    __metadata('design:paramtypes', [logging_service_1.LoggingService])
                ], ComponentOneComponent);
                return ComponentOneComponent;
            }());
            exports_1("ComponentOneComponent", ComponentOneComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudE9uZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFjQTtnQkFDRSxnQ0FBZ0M7Z0JBQ2hDLCtCQUFvQixlQUErQjtvQkFBL0Isb0JBQWUsR0FBZixlQUFlLENBQWdCO2dCQUFHLENBQUM7Z0JBRXZELHFDQUFLLEdBQUwsVUFBTSxPQUFlO29CQUNuQixJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDcEMsQ0FBQztnQkFqQkg7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVCxRQUFRLEVBQUUsZUFBZTt3QkFDekIsUUFBUSxFQUFFLHdHQUtYO3dCQUNDLFNBQVMsRUFBRSxDQUFDLGdDQUFjLENBQUM7cUJBQzVCLENBQUM7O3lDQUFBO2dCQVVGLDRCQUFDO1lBQUQsQ0FSQSxBQVFDLElBQUE7WUFSRCx5REFRQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudE9uZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0xvZ2dpbmdTZXJ2aWNlfSBmcm9tIFwiLi9zZXJ2aWNlcy9sb2dnaW5nLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY29tcG9uZW50LW9uZScsXG4gIHRlbXBsYXRlOiBgXG5cbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAjbWVzc2FnZT5cbiAgICA8YnV0dG9uIChjbGljayk9XCJvbkxvZyhtZXNzYWdlLnZhbHVlKVwiPlNFTkQ8L2J1dHRvbj5cblxuYCxcbiAgcHJvdmlkZXJzOiBbTG9nZ2luZ1NlcnZpY2VdXG59KVxuXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50T25lQ29tcG9uZW50IHtcbiAgLy9pbmplY3Qgb3VyIGxvZ2dpbiBzZXJ2aWNlIGhlcmVcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfbG9nZ2luZ1NlcnZpY2U6IExvZ2dpbmdTZXJ2aWNlKSB7fVxuXG4gIG9uTG9nKG1lc3NhZ2U6IHN0cmluZyl7XG4gICAgdGhpcy5fbG9nZ2luZ1NlcnZpY2UubG9nKG1lc3NhZ2UpO1xuICB9XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
