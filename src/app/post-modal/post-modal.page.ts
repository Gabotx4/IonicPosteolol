import { Component, OnInit } from '@angular/core';
import { posteo } from '../modelos/posteo';
import { PosteoService } from '../servicios/posteo.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-post-modal',
  templateUrl: './post-modal.page.html',
  styleUrls: ['./post-modal.page.scss'],
  standalone: true, 
  imports: [
    CommonModule,
    FormsModule,
    IonicModule, 
  ],
})
export class PostModalPage implements OnInit {

  constructor(private servicio : PosteoService,private route: ActivatedRoute) { }
 

  post : posteo = new posteo;
  id: string = '';

  ngOnInit() {
    console.log('funcion init desde detalle');
    this.id +=this.route.snapshot.paramMap.get('id');
    this.servicio.show(this.id).subscribe(response=>{
      console.log(response);
      this.post=response;
    })
  }

}
