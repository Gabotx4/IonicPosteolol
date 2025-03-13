import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
  imports: [
      
        CommonModule,
        FormsModule,
        IonicModule,
      ],
})
export class RegistrarPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
