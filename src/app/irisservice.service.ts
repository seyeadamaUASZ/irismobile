import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IrisserviceService {
  
  host:string="http://localhost:8080/";

  constructor(private http:HttpClient) { }

  predict(data){
   return this.http.post(this.host+'predict',data);
  }
}


//fatiha 14
//alnachar 14
//liiIlafi khoureych 14
//salatoul alanabi 14
