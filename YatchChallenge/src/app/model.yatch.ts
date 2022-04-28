export class Yatch {

    id: number;
    nome: string;
    descrizione: string;
    img: string;
    prezzo: number;
    offerta: boolean;


	constructor(id: number, nome: string, descrizione: string, img:string, prezzo:number, offerta: boolean) {
        this.id = id;
        this.nome = nome;
        this.descrizione = descrizione;
        this.img = img;
        this.prezzo = prezzo;
        this.offerta = offerta;
	}

    

}