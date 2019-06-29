import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class HubsService {

  private api = 'http://localhost:1337/hubs';  // URL to web api
  constructor(private http: HttpClient) { }
  /** GET heroes from the server */
  getHubs(): Observable<any> {
    return this.http.get(this.api);
  }
}
