import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable( /*{providedIn:'root'}*/)
export class DataService {
//url:string=`http://api.openweathermap.org/data/2.5/forecast?q`
  constructor(private http: HttpClient) { }
getFact(name:string){
  return this.http.get(`http://api.openweathermap.org/data/2.5/forecast?q=${name}&units=metric&APPID=0d7e2de90681b7e9ebde496ba2000ed0`
  );

//return this.http.get(`http://numbersapi.com/${name}/`,{responseType:'text'});
}

}
