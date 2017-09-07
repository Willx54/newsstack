System.register(["@angular/core", "app/news.service", "rxjs/Rx", "app/truncate", "app/cookie.service"], function (exports_1, context_1) {
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
    var core_1, news_service_1, Rx_1, truncate_1, cookie_service_1, NewsFeedComponent, PAPERS;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (news_service_1_1) {
                news_service_1 = news_service_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            },
            function (truncate_1_1) {
                truncate_1 = truncate_1_1;
            },
            function (cookie_service_1_1) {
                cookie_service_1 = cookie_service_1_1;
            }
        ],
        execute: function () {
            NewsFeedComponent = (function () {
                function NewsFeedComponent(_newsService, cookieService) {
                    this._newsService = _newsService;
                    this.cookieService = cookieService;
                    this.allCookies = cookieService.getAll();
                    this.cookieExists = cookieService.check('myStack');
                    this.cookieValue = cookieService.get('myStack');
                    this.cookieValue = 'UNKNOWN';
                    // public news;
                    this.papers = PAPERS;
                    this.test = true;
                }
                NewsFeedComponent.prototype.onSelect = function (paper) {
                    this.selectedPaper = paper;
                };
                // constructor(private _newsService: NewsService) { }
                NewsFeedComponent.prototype.ngOnInit = function (cookieExists) {
                    console.log(this.cookieExists);
                    if (this.cookieExists) {
                        this.cookieValue = JSON.parse(this.cookieService.get('myStack'));
                        console.log('GOT FROM COOKIES:' + typeof this.cookieValue);
                    }
                    if (this.cookieExists) {
                        this.getNews(this.cookieValue[0]['string']);
                        this.selectedPaper = this.cookieValue[0];
                    }
                    else {
                        this.getNews('bbc-news');
                        this.selectedPaper = PAPERS[0];
                    }
                    console.log('PAPERS' + typeof PAPERS);
                };
                NewsFeedComponent.prototype.getNews = function (source) {
                    var _this = this;
                    this._newsService.getNews(source).subscribe(
                    // the first argument is a function which runs on success
                    function (data) {
                        _this.news = data['articles'];
                    }, function (error) {
                        //console.error("Error saving food!");
                        return Rx_1.Observable.throw(error);
                    });
                };
                NewsFeedComponent = __decorate([
                    core_1.Component({
                        pipes: [truncate_1.TruncatePipe],
                        templateUrl: 'app/news-feed/news-feed.component.html',
                        styleUrls: ['app/news-feed/news-feed.component.min.css']
                    }),
                    __metadata("design:paramtypes", [typeof (_a = typeof news_service_1.NewsService !== "undefined" && news_service_1.NewsService) === "function" && _a || Object, typeof (_b = typeof cookie_service_1.CookieService !== "undefined" && cookie_service_1.CookieService) === "function" && _b || Object])
                ], NewsFeedComponent);
                return NewsFeedComponent;
                var _a, _b;
            }());
            exports_1("NewsFeedComponent", NewsFeedComponent);
            PAPERS = [
                { name: 'bbc', string: 'bbc-news' },
                { name: 'telegraph', string: 'the-telegraph' },
                { name: 'guardian', string: 'the-guardian-uk' },
                { name: 'independent', string: 'independent' },
                { name: 'new scientist', string: 'new-scientist' },
                { name: 'the economist', string: 'the-economist' },
                { name: 'cnn', string: 'cnn' },
                { name: 'time', string: 'time' },
                { name: 'national geographic', string: 'national-geographic' }
            ];
        }
    };
});
//# sourceMappingURL=news-feed.component.js.map