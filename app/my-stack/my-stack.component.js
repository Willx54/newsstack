System.register(["@angular/core", "app/cookie.service"], function (exports_1, context_1) {
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
    var core_1, cookie_service_1, MyStackComponent, OPTIONS, SELECTEDOPTIONS;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (cookie_service_1_1) {
                cookie_service_1 = cookie_service_1_1;
            }
        ],
        execute: function () {
            MyStackComponent = (function () {
                function MyStackComponent(cookieService) {
                    this.cookieService = cookieService;
                    this.cookieExists = cookieService.check('myStack');
                    this.allCookies = cookieService.getAll();
                    this.cookieValue = 'UNKNOWN';
                    this.options = OPTIONS;
                    this.selectedOptions = SELECTEDOPTIONS;
                }
                MyStackComponent.prototype.ngOnInit = function () {
                    // this.cookieService.set( 'Test', 'Hello World' );
                    this.cookieValue = this.cookieService.get('myStack');
                    console.log('GOT FROM COOKIES:');
                    console.log(this.cookieValue);
                };
                MyStackComponent.prototype.saveStack = function () {
                    console.log(SELECTEDOPTIONS);
                    this.cookieService.set('myStack', JSON.stringify(SELECTEDOPTIONS));
                };
                MyStackComponent.prototype.updateChecked = function (option, i) {
                    var checkboxId = 'cb' + i;
                    if (SELECTEDOPTIONS.includes(option)) {
                        var index = SELECTEDOPTIONS.indexOf(option); // <-- Not supported in <IE9
                        SELECTEDOPTIONS.splice(index, 1);
                    }
                    else {
                        if (SELECTEDOPTIONS.length > 7) {
                            document.getElementById(checkboxId).checked = false;
                        }
                        else {
                            SELECTEDOPTIONS.push(option);
                        }
                    }
                };
                MyStackComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/my-stack/my-stack.component.html',
                        styleUrls: ['app/my-stack/my-stack.component.min.css']
                    }),
                    __metadata("design:paramtypes", [typeof (_a = typeof cookie_service_1.CookieService !== "undefined" && cookie_service_1.CookieService) === "function" && _a || Object])
                ], MyStackComponent);
                return MyStackComponent;
                var _a;
            }());
            exports_1("MyStackComponent", MyStackComponent);
            OPTIONS = [
                { name: 'abc news australia', string: 'abc-news-au' },
                { name: 'al jazeera', string: 'al-jazeera-english' },
                { name: 'ars technica', string: 'ars-technica' },
                { name: 'associated press', string: 'associated-press' },
                { name: 'bbc news', string: 'bbc-news' },
                { name: 'bbc sport', string: 'bbc-sport' },
                { name: 'bild', string: 'bild' },
                { name: 'bloomberg', string: 'bloomberg' },
                { name: 'breitbart news', string: 'breitbart-news' },
                { name: 'business insider', string: 'business-insider' },
                { name: 'business insider uk', string: 'business-insider-uk' },
                { name: 'buzzfeed', string: 'buzzfeed' },
                { name: 'cnbc', string: 'cnbc' },
                { name: 'cnn', string: 'cnn' },
                { name: 'daily mail', string: 'daily-mail' },
                { name: 'der tagesspiegel', string: 'der-tagesspiegel' },
                { name: 'die zeit', string: 'die-zeit' },
                { name: 'engadget', string: 'engadget' },
                { name: 'entertainment weekly', string: 'entertainment-weekly' },
                { name: 'espn', string: 'espn' },
                { name: 'espn cric info', string: 'espn-cric-info' },
                { name: 'financial times', string: 'financial-times' },
                { name: 'focus', string: 'focus' },
                { name: 'football italia', string: 'football-italia' },
                { name: 'fortune', string: 'fortune' },
                { name: 'four four two', string: 'four-four-two' },
                { name: 'fox sports', string: 'fox-sports' },
                { name: 'google news', string: 'google-news' },
                { name: 'gruenderszene', string: 'gruenderszene' },
                { name: 'hacker news', string: 'hacker-news' },
                { name: 'handelsblatt', string: 'handelsblatt' },
                { name: 'ign', string: 'ign' },
                { name: 'independent', string: 'independent' },
                { name: 'mashable', string: 'mashable' },
                { name: 'metro', string: 'metro' },
                { name: 'mirror', string: 'mirror' },
                { name: 'mtv news', string: 'mtv-news' },
                { name: 'mtv news uk', string: 'mtv-news-uk' },
                { name: 'national geographic', string: 'national-geographic' },
                { name: 'new scientist', string: 'new-scientist' },
                { name: 'newsweek', string: 'newsweek' },
                { name: 'new york magazine', string: 'new-york-magazine' },
                { name: 'nfl news', string: 'nfl-news' },
                { name: 'polygon', string: 'polygon' },
                { name: 'recode', string: 'recode' },
                { name: 'reddit r all', string: 'reddit-r-all' },
                { name: 'reuters', string: 'reuters' },
                { name: 'spiegel online', string: 'spiegel-online' },
                { name: 't3n', string: 't3n' },
                { name: 'talksport', string: 'talksport' },
                { name: 'techcrunch', string: 'techcrunch' },
                { name: 'techradar', string: 'techradar' },
                { name: 'the economist', string: 'the-economist' },
                { name: 'the guardian au', string: 'the-guardian-au' },
                { name: 'the guardian uk', string: 'the-guardian-uk' },
                { name: 'the hindu', string: 'the-hindu' },
                { name: 'the huffington post', string: 'the-huffington-post' },
                { name: 'the lad bible', string: 'the-lad-bible' },
                { name: 'the new york times', string: 'the-new-york-times' },
                { name: 'the next web', string: 'the-next-web' },
                { name: 'the sport bible', string: 'the-sport-bible' },
                { name: 'the telegraph', string: 'the-telegraph' },
                { name: 'the times of india', string: 'the-times-of-india' },
                { name: 'the verge', string: 'the-verge' },
                { name: 'the wall street journal', string: 'the-wall-street-journal' },
                { name: 'the washington post', string: 'the-washington-post' },
                { name: 'time', string: 'time' },
                { name: 'usa today', string: 'usa-today' },
                { name: 'wired de', string: 'wired-de' },
                { name: 'wirtschafts woche', string: 'wirtschafts-woche' }
            ];
            SELECTEDOPTIONS = [];
        }
    };
});
//# sourceMappingURL=my-stack.component.js.map