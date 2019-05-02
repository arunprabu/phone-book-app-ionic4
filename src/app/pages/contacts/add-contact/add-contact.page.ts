import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ContactService } from 'src/app/services/contact.service';

import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts/ngx';


@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.page.html',
  styleUrls: ['./add-contact.page.scss'],
})
export class AddContactPage implements OnInit {

  constructor( private contactService: ContactService, 
              public toastController: ToastController,
              private contacts: Contacts ) { }

  ngOnInit() {
  
  }

  addContactHandler(formData){
    console.log(formData);
    let contact: Contact = this.contacts.create();
    contact.name = new ContactName(null, 'Smith', 'John');
              contact.phoneNumbers = [new ContactField('mobile', '6471234567')];
              contact.save().then(
                () => {
                  console.log('Contact saved!', contact);
                  this.presentToast();
                },
                (error: any) => {
                  console.error('Error saving contact.', error);
                }
              );

    this.contactService.createContact(formData.value)
            .subscribe( resp => {
              console.log(resp);
              this.presentToast();
            });
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your contact has been saved.',
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }

}
