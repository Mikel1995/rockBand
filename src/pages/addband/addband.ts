import { ListPage } from "./../list/list";
import { BandsProvider } from "./../../providers/bands/bands";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

import { File } from "@ionic-native/file";
import { Transfer, TransferObject } from "@ionic-native/transfer";
import { FilePath } from "@ionic-native/file-path";
import { Camera, CameraOptions } from "@ionic-native/camera";
import { LoadingController } from "ionic-angular";
import {
  FileTransfer,
  FileUploadOptions,
  FileTransferObject
} from "@ionic-native/file-transfer";
/**
 * Generated class for the AddbandPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var cordova: any;
@Component({
  selector: "page-addband",
  templateUrl: "addband.html"
})
export class AddbandPage {
  imageURI:any;
  imageFileName:any;
  private band = {
    name: "",
    age: 2
  };
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private addBandProvider: BandsProvider,
    private transfer: FileTransfer,
    private loaderCtrl: LoadingController,
    private camera: Camera,
  ) {}

  addBand(form) {
    this.band.age = Number(this.band.age);
    this.addBandProvider.addBand(this.band).subscribe(
      data => {
        console.log(data);
        this.navCtrl.push(ListPage);
      },
      erro => {
        console.log(erro);
        this.navCtrl.push(ListPage);
      }
    );
  }

  uploadImage(){
    let loader = this.loaderCtrl.create({
      content: "Uploading..."
    });
    loader.present();
    const fileTransfer: FileTransferObject = this.transfer.create();
  
    let options: FileUploadOptions = {
      fileKey: 'ionicfile',
      fileName: 'ionicfile',
      chunkedMode: false,
      mimeType: "image/jpeg",
      headers: {}
    }
  
    fileTransfer.upload(this.imageURI, 'http://192.168.0.7:8080/api/uploadImage', options)
      .then((data) => {
      console.log(data+" Uploaded Successfully");
      this.imageFileName = "http://192.168.0.7:8080/static/images/ionicfile.jpg"
      loader.dismiss();
    }, (err) => {
      console.log(err);
      loader.dismiss();
    });

  }

  getImage() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    }
  
    this.camera.getPicture(options).then((imageData) => {
      this.imageURI = imageData;
    }, (err) => {
      console.log(err);
    });
  }
}
