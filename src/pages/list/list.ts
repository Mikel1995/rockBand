import { AddbandPage } from './../addband/addband';
import { BandsProvider } from "./../../providers/bands/bands";
import { BanddetailPage } from "./../banddetail/banddetail";
import { Component } from "@angular/core";
import {
  NavController,
  NavParams,
  AlertController,
  ToastController
} from "ionic-angular";

@Component({
  selector: "page-list",
  templateUrl: "list.html"
})
export class ListPage {
  private inComingData;
  private allData;
  searchKey: string = "";

  constructor(
    public homeProvider: BandsProvider,
    public navCtrl: NavController,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController
  ) {
    this.getBands();
  }

  private getBands() {
    this.homeProvider.getAllRockBands().subscribe(
      data => {
        this.inComingData = data;
        this.allData = data;
        console.log(data);
      },
      err => {
        console.log(err);
      }
    );
  }
  removeItem(id: any): void {
    let alert = this.alertCtrl.create({
      title: "Confirm Delete",
      message: "Are you sure you want to delete this Band?",
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          handler: () => {}
        },
        {
          text: "Yes",
          handler: () => {
            this.deleteBandById(id);
          }
        }
      ]
    });
    alert.present();
  }

  private deleteBandById(id: any) {
    this.homeProvider.deleteBandById(id).subscribe(
      data => {
        this.presentToast("Item has been deleted!");
        this.navCtrl.push(ListPage);
        
      },
      error => {
        this.presentToast("Item has not been deleted!");
        this.navCtrl.push(ListPage);
      }
    );
  }

  presentToast(message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: "top"
    });

    toast.onDidDismiss(() => {
      console.log("Dismissed toast");
    });

    toast.present();
  }

  onInputSearch(ev){
    this.inComingData = this.allData;
    console.log('this.allData: ', this.allData);
    let val = ev.target.value;
    if(!val || !val.trim()){
      return;
    }
  
    this.inComingData = this.inComingData.filter((v)=>{
      if(v.name.toLowerCase().indexOf(val.toLowerCase())>-1){
        return true;
      }
      return false;
    })
    console.log('this.inComingData: ', this.inComingData);
  }

  openBandDetail(badDetail){
    console.log('badDetail: ', badDetail);
    this.navCtrl.push(BanddetailPage, {'bandDetail': badDetail});
  }

  private openAddBand() {
    this.navCtrl.push(AddbandPage);
  }
}
