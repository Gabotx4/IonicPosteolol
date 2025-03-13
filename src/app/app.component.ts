import { Component, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  @ViewChild('loginModal') loginModal!: IonModal;

  openLoginModal() {
    this.loginModal.present();
  }

  closeLoginModal() {
    this.loginModal.dismiss();
  }

  onLogin() {
    // Lógica para manejar el login
  }
}
