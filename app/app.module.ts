import {NgModule, CUSTOM_ELEMENTS_SCHEMA}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule}    from '@angular/http';
import {FormsModule} from '@angular/forms';
import {NewsService} from 'app/news.service';
import {EmailService} from 'app/email.service';
import {AppComponent}  from './app.component';
import {NewsFeedComponent}  from './news-feed/news-feed.component';
import {ContactComponent}  from './contact/contact.component';
import {MyStackComponent}  from 'app/my-stack/my-stack.component';
import {PageNotFoundComponent}  from './not-found/not-found.component';
import {TruncatePipe}  from 'app/truncate';
import {RouterModule, Routes} from '@angular/router';
import { CookieService } from 'app/cookie.service';

const appRoutes: Routes = [
  { path: 'contact', component: ContactComponent },
  { path: 'my stack', component: MyStackComponent },
  // { path: 'home', component: NewsFeedComponent },
  // { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'back', component: NewsFeedComponent },
  { path: 'home', component: NewsFeedComponent },
  { path: '', component: NewsFeedComponent },
  // { path: '',   redirectTo: '', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
      BrowserModule,
      HttpModule,
      FormsModule,
      RouterModule.forRoot(appRoutes)
    ],
    declarations: [
    	AppComponent,
    	NewsFeedComponent,
    	TruncatePipe,
    	ContactComponent,
      MyStackComponent,
    	PageNotFoundComponent
    	 ],
    providers: [
      NewsService,
      EmailService,
      CookieService
      ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    bootstrap: [AppComponent]
})
export class AppModule { }