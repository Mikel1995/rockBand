import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import "rxjs/Rx";
import { Headers } from "@angular/http";
/*
  Generated class for the BandsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BandsProvider {

  constructor(public http: Http) {
  }

  getAllRockBands() {
    return this.http.get("http://localhost:7878/bands").map(res => res.json());
  }

  deleteBandById(id: any) {
    let myHeader = new Headers();
    myHeader.append("Content-Type", "application/json");
    return this.http.delete("http://localhost:7878/band/delete/" + id, {headers:myHeader});
  }


  addBand(band:any){
    return this.http.post('http://localhost:7878/band/add',band)
}

}
