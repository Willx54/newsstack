System.register(["@angular/core", "app/email.service"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, email_service_1, ContactComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (email_service_1_1) {
                email_service_1 = email_service_1_1;
            }
        ],
        execute: function () {
            ContactComponent = (function () {
                function ContactComponent(emailService) {
                    this.emailService = emailService;
                    // model = '';
                    this.submitted = false;
                    // onSubmit() { this.submitted = true; }
                    // from email php tutorial
                    this.title = 'Angular PHP Email Example!';
                    this.model = {};
                }
                ContactComponent.prototype.sendEmail = function (model) {
                    var _this = this;
                    console.log('contact component happening');
                    this.emailService.sendEmail(model).subscribe(function (res) {
                        console.log('CLEARED');
                        console.log('AppComponent Success', res);
                        _this.submitted = true;
                    }, function (error) {
                        console.log('AppComponent Error', error);
                    });
                };
                ContactComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/contact/contact.component.html',
                        styleUrls: ['app/contact/contact.component.min.css']
                    }),
                    __metadata("design:paramtypes", [typeof (_a = typeof email_service_1.EmailService !== "undefined" && email_service_1.EmailService) === "function" && _a || Object])
                ], ContactComponent);
                return ContactComponent;
                var _a;
            }());
            exports_1("ContactComponent", ContactComponent);
        }
    };
});
//# sourceMappingURL=contact.component.js.map