import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient,) { }

  get(path: string) {
    return this.http
      .get(path, {})
      .pipe(map((res) => res));
  }
}
