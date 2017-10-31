import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GlobalserviceProvider {
  url
  constructor(public http: Http) {
    this.url = "http://www.arcamonecreations.fr/php/"
  }
  homeloader(){
    return this.http.get(
      this.url + 'dataretriever.php?collect=home').map((res: Response) => res.json())
  }
}
