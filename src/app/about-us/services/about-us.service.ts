import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Application } from '../shared/applications';

@Injectable()
export class AboutUsService {
    constructor(private _http: Http){}
    getApps(): Observable<Application[]>{
        return this._http.get('assets/data/data.json')
        .map( res => res.json())
    }
}
