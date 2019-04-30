import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.page.html',
  styleUrls: ['./edit-modal.page.scss'],
})
export class EditModalPage implements OnInit {

  userId: number = null;
  constructor(private navParams: NavParams, private modalController: ModalController) {
    
  }

  ngOnInit() {
    console.log(this.navParams);
    this.userId = this.navParams.data.id;
  }

  closeEditModal(){
    this.modalController.dismiss();
  }

}
