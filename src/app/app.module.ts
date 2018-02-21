import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";

import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { ListPage } from "../pages/list/list";

import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { BandsProvider } from "../providers/bands/bands";
import { HttpModule } from "@angular/http";
import { AddbandPage } from "../pages/addband/addband";
import { BanddetailPage } from "../pages/banddetail/banddetail";
import { File } from "@ionic-native/file";
import { Transfer } from "@ionic-native/transfer";
import { FilePath } from "@ionic-native/file-path";
import { Camera } from "@ionic-native/camera";
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
@NgModule({
  declarations: [MyApp, HomePage, ListPage, AddbandPage, BanddetailPage],
  imports: [BrowserModule, HttpModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, HomePage, ListPage, AddbandPage, BanddetailPage],
  providers: [
    StatusBar,
    SplashScreen,
    FileTransfer,
    File,
    Camera,
    FilePath,
    Transfer,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    BandsProvider
  ]
})
export class AppModule {}
