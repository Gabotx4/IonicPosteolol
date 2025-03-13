import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';
import { IonContent, IonHeader, IonTitle,IonToolbar,
          IonGrid, IonRow, IonCol, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle,
          IonCardTitle, IonButton
 } from '@ionic/angular';
import { PosteoService } from '../servicios/posteo.service';
import { posteo, user } from '../modelos/posteo';
import { PostModalPage } from '../post-modal/post-modal.page';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
  standalone: true, 
  imports: [
    RouterLink,
    CommonModule,
    FormsModule,
    IonicModule, 
  ],
})

export class PostPage implements OnInit {

  posteo: posteo[]=[];
  //usurio: user[]=[];


  constructor(private servicio: PosteoService,private modalController: ModalController) { }

  ngOnInit() {

    console.log('Funcion ngonit del posteo ');
    this.servicio.index().subscribe(response => {
      this.posteo= response; 
      console.log('respuesta',response);
    })

 
  }


  async openPostModal(post: any) {
    const modal = await this.modalController.create({
      component: PostModalPage,
      componentProps: {
        post: post,
      },
    });
    return await modal.present();
  }

  

}
