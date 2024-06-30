import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({ providedIn: 'root' })

export class GifsService {
    private _tagsHistory: string[] = [];
    private serviceUrl: string = 'https://api.giphy.com/v1/gifs'
    private apiKey: string = '2VEVtJ3zPP5rUFBXO2yxuGzI6QvlSCfS';

    constructor(private http: HttpClient) { }

    get tagsHistory() {
        return [...this._tagsHistory];
    }


    private organizeHistory(tag: string) {
        tag = tag.toLowerCase();

        if (this._tagsHistory.includes(tag)) {
            this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag);
        }

        this._tagsHistory.unshift(tag);
        this._tagsHistory = this.tagsHistory.splice(0, 10);

    }

    searchTag(tag: string): void {
        if (tag.length === 0) return
        this.organizeHistory(tag);

        const params = new HttpParams()
            .set('api_key', this.apiKey)
            .set('limit', '10')
            .set('q', tag)

        this.http.get(`${this.serviceUrl}/search?`, { params: params })
            .subscribe(resp => {
                console.log(resp);
            })
    }

}