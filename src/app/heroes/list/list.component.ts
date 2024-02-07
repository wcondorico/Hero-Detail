import { Component, EventEmitter, Output } from '@angular/core';
import { HeroInterface } from '../hero/hero-interface';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  
  Heroes : HeroInterface[] = [
    {
      id: 1,
      name: 'SpiderMan',
      age: 25,
      img: 'https://hips.hearstapps.com/hmg-prod/images/spider-man-memes-no-way-home-1647684597.jpg?resize=980:*'
    },
    {
      id: 2,
      name: 'Hulk',
      age: 43,
      img: 'https://i.pinimg.com/564x/26/d9/04/26d904f92edc39e830b7252301462361.jpg'
    },
    {
      id: 3,
      name: 'Thor',
      age: 207,
      img: 'https://lumiere-a.akamaihd.net/v1/images/thor_amor_y_trueno_3cc74888.jpeg?region=420,0,1080,1080'
    },
    {
      id: 4,
      name: 'Loky',
      age: 205,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRICKllOvSUDQkAwgXodwooV0XE5bXGvwTBPDD8UoHlclFKMXyGIYeKg2qjv69kmuBBICw&usqp=CAU'
    }
  ]

  @Output() showDetailHero = new EventEmitter()

  showData(heroe:HeroInterface){
    this.showDetailHero.emit(heroe)
  }
}
