import {Component} from '@angular/core';
import {NewsService} from 'app/news.service';
import {Observable} from 'rxjs/Rx';
import {NewsFeedComponent}  from 'app/news-feed/news-feed.component';
import {TruncatePipe} from 'app/truncate';
import {ContactComponent}  from 'app/contact/contact.component';
import {MyStackComponent}  from 'app/my-stack/my-stack.component';

@Component({
  selector: 'news-app',
  pipes: [TruncatePipe],
  template:`
  <header>
    <div class="container">
      <a routerLink="/">
        <h1 class="icon icon-logo">newsstack logo</h1>
      </a>
    </div>
  </header>
  <div class="container">
  test
      <router-outlet></router-outlet>
  </div>
  <footer>
    <div class="container">
      <div class="att-link">powered by <a href="https://newsapi.org/" target="_blank">newsapi.org</a></div>
      <a class="contact" routerLink="/contact">contact</a>
      <a class="my-stack" routerLink="/my stack">my stack</a>
    </div>
  </footer>
  `,
  styleUrls: ['app/app.component.min.css']
})
export class AppComponent {
  constructor() {}
}

