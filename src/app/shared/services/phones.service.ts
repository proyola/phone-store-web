import { Phone } from '../model/phone.model';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class PhonesService {
  private static readonly BASE_API = environment.baseApi;
  private static readonly PHONES_API = `${PhonesService.BASE_API}/phones`;
  private static defaultHeaders: Headers = new Headers({ 'Content-Type': 'application/json' });
  private static defaultOptions: RequestOptions = new RequestOptions({ headers: PhonesService.defaultHeaders });

  constructor(private http: Http) { }

  list(): Observable<Array<Phone>> {
    return this.http.get(PhonesService.PHONES_API, PhonesService.defaultOptions)
      .map((res: Response) => res.json())
      .catch(error => this.handleError(error));
  }

  get(id: string): Observable<Phone> {
    return this.http.get(`${PhonesService.PHONES_API}/${id}`, PhonesService.defaultOptions)
      .map((res: Response) => res.json())
      .catch(error => this.handleError(error));
  }

  private handleError(error: Response): Observable<any> {
    if (!environment.production) {
      console.error(`Phone Service error: ${error.json()}`);
    }
    return Observable.throw(error.json());
  }

}
