import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { IContact } from 'src/app/interfaces/icontact';
import { ModalController } from '@ionic/angular';
import { EditModalPage } from './edit-modal/edit-modal.page';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.page.html',
  styleUrls: ['./contact-details.page.scss'],
})
export class ContactDetailsPage implements OnInit {
  
  contactData: IContact;
  contactId: string;

  constructor(private contactService: ContactService, 
              private modalController: ModalController,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.contactId = this.activatedRoute.snapshot.paramMap.get('id');

    this.contactService.getContactById(this.contactId)
              .subscribe( (resp: IContact) => {
                this.contactData = resp;
              });
  }

  async openEditModal(){
    const editModal = await this.modalController.create({
      //syntax is to use modal page
      component: EditModalPage,
      componentProps: this.contactData
    });
    editModal.present();
  }

}
