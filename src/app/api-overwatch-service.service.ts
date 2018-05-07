import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Perso } from './perso';
import { Config } from 'protractor/built/config';
@Injectable()
export class ApiOverwatchServiceService {
  private http : HttpClient;
  constructor(client : HttpClient) {this.http = client; }

  getProfileStat(perso : Perso): any {
    this.http.get("https://ow-api.com/v1/stats/pc/eu/"+perso.battleTag+"/profile").subscribe((resp : any) => {
      console.log(resp);
      perso.name = resp.name;
      perso.cote = resp.rating;
      perso.icon = resp.icon;
    });
  }


}
