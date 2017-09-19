import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  whiteId: number;
  temp: number;
  score = 0;
  
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
  
      while (this.temp === this.whiteId)  {
        this.temp = this.getRandomintInclusive(1, 4);
      }
  
      this.whiteId = this.temp;
    }
  
    sendId (clickedId: number) {
      if (this.whiteId === clickedId) {
        this.score = this.score + 1;
        this.changeColor();
      }
    }
}
