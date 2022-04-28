import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Yatch } from './model.yatch';

@Injectable({
  providedIn: 'root'
})
export class YatchService {

  constructor(private http:HttpClient) { 
    
  }

  url: string = "";
  
  public getAll(){
    return this.http.get(this.url);
  }
  
  public updateYatch(yatch: Yatch){
    return this.http.put(this.url, yatch)
  }
  
  public deleteYatch(){
    return this.http.delete(this.url)
  }
  
  array : Yatch[] =  this.getAll();
  
  public getYatchOfferta(offerta: boolean) : Yatch[]{
    //  array.forEach(y => {
    //    if(y.offerta){
    //      offertaYatch.push
    //    }
    //  }
    //  )
    //  ;
     return this.array.filter(y => y.offerta == offerta);
  }
}
