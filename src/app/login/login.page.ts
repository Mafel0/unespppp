import { Component, OnInit } from '@angular/core';
import { AlertController, NavController, ToastController } from '@ionic/angular';
import { AuthServiceTsService } from '../services/auth-service.ts.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  form: any = {
    username: undefined,
    password: undefined
  }

  constructor(
    private toastController: ToastController,
    private readonly navCtrl: NavController,
    private alertController: AlertController
  ) { 

  }

  ngOnInit() {
  }

  async login() {

    if (this.form.username === undefined || this.form.user === '') return this.toastAlert('top', 'Preencha o campo usuário');
    if (this.form.password === undefined || this.form.password === '') return this.toastAlert('top', 'Preencha o campo senha');

    let body = {
      username: this.form.username,
      password: this.form.password
    }

    fetch('http://127.0.0.1/back-end/api.php', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
    .then((resp) => resp.json())
    .then((data) => {
      if (data.data) this.navCtrl.navigateForward('/');
      if (!data.data) this.presentAlert();
    })
    .catch((err) => console.log(err))

  }

  toggleType(input: string, icon: string) {

    let auxInput: any = document.querySelector(`#${input}`);
    let auxIcon: any = document.querySelector(`#${icon}`);

    if (auxIcon.name === 'eye-off-outline') {

      auxIcon.name = 'eye-outline';
      auxInput.type = 'text';
      
    } else {
      
      auxIcon.name = 'eye-off-outline';
      auxInput.type = 'password';

    }

  }

  async toastAlert(position: 'top' | 'middle' | 'bottom', message: string, duration: number = 1500) {
    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      position: position,
      icon: 'alert-circle',
      cssClass: 'toastAlert'
    });

    await toast.present();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Ops!',
      message: 'Usuário ou senha incorretos!',
      buttons: ['OK']
    });
  
    await alert.present();
  }

}
