import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.page.html',
  styleUrls: ['./popular.page.scss'],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ]
})
export class PopularPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
