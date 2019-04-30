import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { IContact } from 'src/app/interfaces/icontact';
import { ModalController } from '@ionic/angular';
import { EditModalPage } from './edit-modal/edit-modal.page';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.page.html',
  styleUrls: ['./contact-details.page.scss'],
})
export class ContactDetailsPage implements OnInit {
  
  contactData: IContact;

  constructor(private contactService: ContactService, 
              private modalController: ModalController) { }

  ngOnInit() {
    this.contactService.getContactById('1')
              .subscribe( (resp: IContact) => {
                this.contactData = resp;
              });
  }

  async openEditModal(){
    const editModal = await this.modalController.create({
      //syntax is to use modal page
      component: EditModalPage,
      componentProps: {
        id: 1
      }
    });
    editModal.present();
  }

}
