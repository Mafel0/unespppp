import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  leave: boolean = false;

  constructor(
    private readonly navCtrl: NavController,
  ) {}

  ngOnInit() {
  }

  toggleLeave() {
    return this.leave = !this.leave;
  }

  leaveAcount() {
    this.navCtrl.navigateForward('/login');
  }

}
