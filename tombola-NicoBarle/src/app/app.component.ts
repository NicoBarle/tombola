import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Rasoli-Tombola';
  numeri : Number[];
  qualcosa: boolean;
  constructor()
  {
    this.numeri = new Array<Number>();
    this.qualcosa = false;
  }
  estrai(newNumber: HTMLInputElement): boolean{

    let a = Number(newNumber.value);
    let tr = false;
    for (let i of this.numeri)
    {
        if(i == a)
        {
          tr = true    
        }
    }
    if(!tr)
    {
      this.numeri.push(a);
    }
    
    return false;
  }
}
