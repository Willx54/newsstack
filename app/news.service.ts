import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from 'rxjs/Rx';

@Injectable()
export class NewsService {
    constructor(private http:Http) {
    }

    // Uses http.get() to load a single JSON file
    getNews(source) {
        return this.http.get('https://newsapi.org/v1/articles?source='+source+'&apiKey=22584ee7883646308b29d728c5895470').map((res:Response) => res.json());
    }
    
}
