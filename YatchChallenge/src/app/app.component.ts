import { Component, Input } from '@angular/core';
import { Yatch } from './model.yatch';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  yatchList: Yatch[] = [
    {
      "id": 1,
      "nome": "Yatch 1",
      "descrizione": "Bello yatch",
      "img": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cover-1631629430.jpg",
      "prezzo": 25000,
      "offerta": true

    },
    {
      "id": 2,
      "nome": "Yatch 2",
      "descrizione": "yatch fantastico",
      "img": "https://www.repstatic.it/content/nazionale/img/2022/03/03/102621208-a46d4085-3fd6-4a1b-a66a-4c13bc6d83fb.jpg",
      "prezzo": 40000,
      "offerta": false
    },
    {
      "id": 3,
      "nome": "Yatch 3",
      "descrizione": "yatch di lusso",
      "img": "https://www.ragusanews.com//immagini_articoli/03-07-2021/negli-yacht-di-lusso-la-parola-d-ordine-e-il-ponte-oasi-500.jpg",
      "prezzo": 600000000,
      "offerta": false
    }
  ]



}
