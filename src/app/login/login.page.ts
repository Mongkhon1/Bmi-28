import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private page2: NavController) { }

  backhome(){
    this.page2.navigateBack ('/home')
  }

  ngOnInit() {
  }

}
