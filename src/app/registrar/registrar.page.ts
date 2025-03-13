import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
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

  form?:FormGroup;
  

  constructor(private foprm:FormBuilder) { }

  createUser(){
    this.form = this.foprm.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      correo: ['', Validators.required],
      

    })
  }


  ngOnInit() {
  }

  previewImage(event: any, index: number) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const preview = document.getElementById(`preview${index}`) as HTMLImageElement;
        if (preview) {
          preview.src = e.target.result;
          preview.classList.remove('hidden');
        }
      };
      reader.readAsDataURL(file);
    }
  }



}
