import { Component, OnInit } from '@angular/core';
import { HeroeModel } from 'src/app/models/heroe.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe = new HeroeModel();
  constructor() { }

  ngOnInit() {
  }
  guardar(f: NgForm) {
   if (f.invalid) {
     console.log('formulario no valido');
     return;
     
   }
    console.log(f);
    console.log(this.heroe);
    

  }

}
