import { Component } from '@angular/core';
import { IrisserviceService } from '../irisservice.service';
import { NavController, LoadingController, ToastController, AlertController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  mode:any=0;
  prediction:any;
  loadData={sepalLength:0,sepalWidth:0,petalLength:0,petalWidth:0};
  constructor(private irisService:IrisserviceService,
    public nav:NavController, 
    public loadingController:LoadingController,
    private toastController: ToastController,
    private alertCtrl: AlertController) {}


    async presentAlert(mgs) {
      const alert = await this.alertCtrl.create({
        header: 'Alert',
        message: mgs,
        buttons: ['OK']
      });
      await alert.present();
    }
  
    async presentToast(msg) {
      const toast = await this.toastController.create({
        message: msg,
        duration: 2000
      });
      toast.present();
    }


 async gotoPredict(){
    const loading = await this.loadingController.create({
      message:'Please Wait....',
      duration: 3000
    });
    await loading.present();
    this.irisService.predict(this.loadData)
    .subscribe(res=>{
      if(res !==''){
       this.mode=1; 
       this.prediction=res['outputlabel'];
      }
    },err=>{
      console.log(err);
      this.presentAlert("Erreur prediction !!!")
      loading.dismiss();
    })
  }

  //ikhlass 264

}
