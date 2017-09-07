import {Component} from '@angular/core';
import {NewsService} from 'app/news.service';
import {Observable} from 'rxjs/Rx'
import {TruncatePipe} from 'app/truncate';
import {CookieService} from 'app/cookie.service';


@Component({
  pipes: [TruncatePipe],
  templateUrl: 'app/news-feed/news-feed.component.html',
  styleUrls: ['app/news-feed/news-feed.component.min.css']
})
export class NewsFeedComponent {

  const allCookies: {} = cookieService.getAll();
  const cookieExists: boolean = cookieService.check('myStack');
  const cookieValue: string = cookieService.get('myStack');

  cookieValue = 'UNKNOWN';
  constructor(private _newsService: NewsService, private cookieService: CookieService) { }

  // public news;

  papers = PAPERS;
  selectedPaper: Paper;
  test = true;

  onSelect(paper: Paper): void {
    this.selectedPaper = paper;
  }

  // constructor(private _newsService: NewsService) { }
  ngOnInit(cookieExists) {
    console.log(this.cookieExists);
    if (this.cookieExists) {
      this.cookieValue = JSON.parse(this.cookieService.get('myStack'));
      console.log('GOT FROM COOKIES:'+ typeof this.cookieValue);
    }
    if (this.cookieExists) {
      this.getNews(this.cookieValue[0]['string']);
      this.selectedPaper = this.cookieValue[0];
    } else {
      this.getNews('bbc-news');
      this.selectedPaper = PAPERS[0];
    }
    console.log('PAPERS'+ typeof PAPERS);
  }

  getNews(source) {
    this._newsService.getNews(source).subscribe(
      // the first argument is a function which runs on success
      data => { 
        this.news = data['articles']
      },
       error => {
         //console.error("Error saving food!");
         return Observable.throw(error);
       }
    );
  }
}

const PAPERS: paper[] = [
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