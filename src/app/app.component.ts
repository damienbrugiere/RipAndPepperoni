import { Component } from '@angular/core';
import { Perso } from './perso';
import { ApiOverwatchServiceService } from './api-overwatch-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private _overwatchApi : ApiOverwatchServiceService;
  persos : Array<Perso>;
  title : string;
  constructor( overwatchApi : ApiOverwatchServiceService){
    this._overwatchApi = overwatchApi;
    this.persos =  [
      new Perso(["support"],"https://www.youtube.com/embed/?listType=playlist&list=PLrlZkG9EjtZ8WG2E0L927Nnq9VPjH6QOs",null,"Leodagan-2216"),
      new Perso(["support","tank"],"https://www.youtube.com/embed/?listType=playlist&list=PLrlZkG9EjtZ_UqhtsVRY_etzlXxAsK4Dw", null,"eanwen-2141"),
      new Perso(["attack"],"https://www.youtube.com/embed/?listType=playlist&list=PLrlZkG9EjtZ8p4tLA7aOQuaMpbTnNfdaD","https://player.twitch.tv/?channel=zorbackkk","Zorback-21428"),
      new Perso(["tank"],"https://www.youtube.com/embed/?listType=playlist&list=PLrlZkG9EjtZ8yZsQatsYhsAQFIYjfldjs",null,"ddeathstar-2299"),
      new Perso(["support","tank"],"https://www.youtube.com/embed/?listType=playlist&list=PLrlZkG9EjtZ_APTSzT3KDeJmFm0BjbAVQ","https://player.twitch.tv/?channel=Hellofloxi","Floxi-21355"),
      new Perso(["attack"],"https://www.youtube.com/embed/?listType=playlist&list=PLrlZkG9EjtZ-rEKqxr2Wmte5xz00l_dcE",null,"Happy-24531") 
    ];
    this.title = 'app';
    this.persos.forEach(element => {
      this._overwatchApi.getProfileStat(element);
    });
  }
}
