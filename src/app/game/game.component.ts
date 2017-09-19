import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor() { }


  whiteId: number;
  temp: number;

  getRandomintInclusive(a: number, b: number) {
    a = Math.ceil(a);
    b = Math.floor(b);

    return Math.floor(Math.random() * (b - a + 1 )) + a;
  }

    ngOnInit() {
      this.whiteId = this.getRandomintInclusive(1, 4);
    }

    getColor(id: number) {
      if (id === this.whiteId) {
      return 'red';
      } else {
      return 'black';
      }
    }

    changeColor() {
      this.temp = this.getRandomintInclusive(1, 4);

      if (this.temp === this.whiteId) {
        this.temp = this.getRandomintInclusive(1, 4);
      } else {
        this.whiteId = this.temp;
      }
    }

    sendId (clickedId: number) {
      if (this.whiteId === clickedId) {
        this.changeColor();
      }
    }
}
