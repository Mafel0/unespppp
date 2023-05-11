import { Component, OnInit } from '@angular/core';
import { Keyboard } from '@capacitor/keyboard';

@Component({
  selector: 'app-informacoes',
  templateUrl: './informacoes.page.html',
  styleUrls: ['./informacoes.page.scss'],
})
export class InformacoesPage implements OnInit {

  form: any = {
    name: '',
    cpf: '',
    date: ''
  };

  showCalendar: boolean = false;

  calendar: any;

  date = new Date();
  today = `${this.date.getFullYear()}-${this.date.getMonth()+1 < 10 ? '0' + (this.date.getMonth()+1) : this.date.getMonth()+1}-${this.date.getDate() < 10 ? '0' + this.date.getDate() : this.date.getDate()}`;

  constructor() { }

  ngOnInit() {
    console.log(this.today);
  }

  async eventCalendar(action: boolean = false, element: any = null) {

    if (action) {
      await element.confirm();
      this.calendar !== undefined ? this.form.date = `${this.calendar.slice(8, 10)}/${this.calendar.slice(5, 7)}/${this.calendar.slice(0, 4)}` : '';
    }
    
    this.showCalendar = !this.showCalendar;
    
    Keyboard.hide();
    
  }

}
