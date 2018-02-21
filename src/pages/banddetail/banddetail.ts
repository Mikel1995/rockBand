import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BanddetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-banddetail',
  templateUrl: 'banddetail.html',
})
export class BanddetailPage {
  private bandDetail;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.bandDetail = navParams.get('bandDetail');
  }


  ionViewDidLoad() {
    
  }

}
