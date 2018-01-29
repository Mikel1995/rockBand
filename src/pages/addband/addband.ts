import { ListPage } from './../list/list';
import { BandsProvider } from './../../providers/bands/bands';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AddbandPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-addband',
  templateUrl: 'addband.html',
})
export class AddbandPage {

  private band={
    name: '',
    age:2
  }
  constructor(public navCtrl: NavController, public navParams: NavParams, private addBandProvider: BandsProvider) {
  }

  addBand(form){
    this.band.age = Number(this.band.age);
      this.addBandProvider.addBand(this.band)
      .subscribe(
        data=>
        {
          console.log(data);
          this.navCtrl.push(ListPage);
        },
        (erro)=>
        {
          console.log(erro);
          this.navCtrl.push(ListPage);          
        }
      )
  }

}
