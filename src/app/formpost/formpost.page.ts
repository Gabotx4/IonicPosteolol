import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PosteoService } from '../servicios/posteo.service';
import { posteo } from '../modelos/posteo';

@Component({
  selector: 'app-formpost',
  templateUrl: './formpost.page.html',
  styleUrls: ['./formpost.page.scss'],
  standalone: true, 
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
})
export class FormpostPage implements OnInit {

  postForm: FormGroup; 
  post: posteo = new posteo();

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _postservice: PosteoService,
    private aRouter: ActivatedRoute
  ) {
 
    this.postForm = this.fb.group({
      titulo: ['', ],
      posteo: ['', ],
      categoria: ['',],
      imagen: ['']
    });
  }

  ngOnInit() {

  }

  onSubmit() {
    if (this.postForm.valid) {
      this.post = this.postForm.value; 
      this._postservice.create(this.post).subscribe(
        response => {
          console.log('Post creado exitosamente', response);
     
          this.router.navigate(['/']); 
        },
        error => {
          console.error('Error al crear el post', error);
   
        }
      );
    } else {
      console.error('Formulario inválido');
    }
  }

  previewImage(event: any, selector: string) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const preview = document.querySelector(selector) as HTMLImageElement;
        if (preview) {
          preview.src = e.target.result;
        }
      };
      reader.readAsDataURL(file);
    }
  }
}