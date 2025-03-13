import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  imports: [
  
          CommonModule,
          FormsModule,
          IonicModule,
          HttpClientModule,
        ],
     
})
export class LoginPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
