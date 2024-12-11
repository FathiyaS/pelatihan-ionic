import { Component, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-article',
  templateUrl: './article.page.html',
  styleUrls: ['./article.page.scss'],
})
export class ArticlePage  {

  name: string = ''; // Variable for the name input

  constructor() {}

  // Handle modal will dismiss event
  onWillDismiss(event: any) {
    console.log('Modal will dismiss:', event);
  }

  // Cancel the modal
  cancel() {
    const modal = document.querySelector('ion-modal');
    modal?.dismiss();
  }

  // Confirm and close modal
  confirm() {
    console.log('User name:', this.name);
    const modal = document.querySelector('ion-modal');
    modal?.dismiss();
  }
}
