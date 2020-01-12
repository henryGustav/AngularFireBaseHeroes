import { Component, OnInit } from '@angular/core';
import { HeroeModel } from 'src/app/models/heroe.model';
import { NgForm } from '@angular/forms';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe = new HeroeModel();
  constructor(
    private heroesService: HeroesService
  ) { }

  ngOnInit() {
  }
  guardar(f: NgForm) {
    if (f.invalid) {
      console.log('formulario no valido');
      return;

    }
    if (this.heroe.id) {
      this.heroesService.actualizarHeroe(this.heroe).
        subscribe(resp => {
          console.log(resp);

        })
    } else {
      this.heroesService.crearHoroe(this.heroe).
        subscribe(res => {
          console.log(res);

        });

    }


  }

}
