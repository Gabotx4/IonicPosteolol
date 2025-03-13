import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormpostPageRoutingModule } from './formpost-routing.module';

import { FormpostPage } from './formpost.page';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: FormpostPage,
      },
    ]),

    FormpostPage,
  ],

})
export class formpost {}
