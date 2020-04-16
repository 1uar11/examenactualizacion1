import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ExampleService } from '../services/example.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  usuario = {
      nombre:'',
      apellido:'',
      telefono:'',
      correo:'',
      fecha_nacimiento:'',
      genero:''
    };

  constructor(private alertController: AlertController,
              private exampleService:ExampleService,
              private router:Router){}

  ngOnInit(){}

  onSubmitTemplate(){
    this.exampleService.sendObjectSource(this.usuario);
/*     console.log('Form submit');
    console.log(this.usuario); */
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Usted es:',
      subHeader: (this.usuario.nombre),
      message: this.usuario.fecha_nacimiento,
      buttons: ['OK']
    });

    await alert.present();
  }
}
