import { Component, Input } from '@angular/core';
import { Perso } from '../perso';

@Component({
  selector: 'player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent {
  @Input()
  perso:Perso;
  youtube: string;

  constructor(){
    this.youtube = null;
  }

  change(chaine : string){
    if(chaine == this.youtube){
      this.youtube = null;
      return;
    }
    this.youtube=chaine;
  }

}
