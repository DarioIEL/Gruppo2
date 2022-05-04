import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Yatch } from './model.yatch';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class YatchService {
  yatchInOfferta: Yatch[] = [];
  yatchList: Yatch[] = []
  // yatchList: Yatch[] = [
  //   {
  //     "id": 1,
  //     "nome": "Yatch 1",
  //     "descrizione": "Bello yatch",
  //     "img": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cover-1631629430.jpg",
  //     "prezzo": 25000,
  //     "offerta": true

  //   },
  //   {
  //     "id": 2,
  //     "nome": "Yatch 2",
  //     "descrizione": "yatch fantastico",
  //     "img": "https://www.repstatic.it/content/nazionale/img/2022/03/03/102621208-a46d4085-3fd6-4a1b-a66a-4c13bc6d83fb.jpg",
  //     "prezzo": 40000,
  //     "offerta": false
  //   },
  //   {
  //     "id": 3,
  //     "nome": "Yatch 3",
  //     "descrizione": "yatch di lusso",
  //     "img": "https://www.ragusanews.com//immagini_articoli/03-07-2021/negli-yacht-di-lusso-la-parola-d-ordine-e-il-ponte-oasi-500.jpg",
  //     "prezzo": 600000000,
  //     "offerta": false
  //   }
  // ];
  
  url: string = "https://yatch-login-default-rtdb.europe-west1.firebasedatabase.app/yatch.json";
  
  constructor(private http:HttpClient) { 
  }

  public getAll(){
    return this.http
    .get(this.url)
    .pipe(map(responseData=>{
      let yatchArr: Yatch[] = [];

      for(let key in responseData){
        yatchArr.push(responseData[key]);
      }
      return yatchArr;
    }));
    
  }
  
  public updateYatch(yatch: Yatch){
    return this.http.put(this.url, yatch)
  }
  
  public deleteYatch(){
    return this.http.delete(this.url)
  }
  
  
  public getYatchOfferta() : Yatch[]{
    this.getAll().subscribe(
      (y)=>{
        y.forEach(yat => {
          if(yat.offerta == true)
            this.yatchInOfferta.push(yat);
        });
      }
    );
    return this.yatchInOfferta;
  }
}
