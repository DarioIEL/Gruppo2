import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Yatch } from '../model.yatch';
import { YatchService } from '../yatch.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  filePath: string;
  myForm: FormGroup;
  yatchService: YatchService;

  constructor(public fb: FormBuilder, yatchService: YatchService) {
    this.myForm = this.fb.group({
      img: [null],
      filename: ['']
    })
    this.yatchService = yatchService;
  }

  ngOnInit(): void { }

  imagePreview(e) {
    const file = (e.target as HTMLInputElement).files[0];

    this.myForm.patchValue({
      img: file
    });

    this.myForm.get('img').updateValueAndValidity()

    const reader = new FileReader();
    reader.onload = () => {
      this.filePath = reader.result as string;
    }
    reader.readAsDataURL(file)
  }

  submit() {
    console.log(this.myForm.value)
  }

  updateYatch(){
    let yatch: Yatch;
    // yatch.id = 
    // yatch.nome = 
    // yatch.descrizione = 
    // yatch.img = 
    // yatch.prezzo = 
    // yatch.offerta = 
    this.yatchService.updateYatch(yatch);
  }

  deleteYatch(){

  }

  

}