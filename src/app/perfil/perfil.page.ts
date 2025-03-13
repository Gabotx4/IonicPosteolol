import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  imports: [

        CommonModule,
        FormsModule,
        IonicModule,
      ],
})
export class PerfilPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
