import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class GifService {
    apiUrl = 'http://localhost:3000'

    constructor(private http: HttpClient) { }
    getRandom(): Observable<any> {
        return this.http.get(`${this.apiUrl}/random`);
    }
    saveGif(id: string, url: string, caption: string): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type':  'application/json',
                'Authorization': 'my-auth-token',
                'Method': 'POST'
            })
        };
        return this.http.post(`${this.apiUrl}/create`, {id, url, caption, vote: 0}, httpOptions);
    }
    getBattle() {}
    vote(id) {}
    getLeaderboard() {}
}
