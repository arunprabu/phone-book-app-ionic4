import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ContactService } from 'src/app/services/contact.service';


@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.page.html',
  styleUrls: ['./add-contact.page.scss'],
})
export class AddContactPage implements OnInit {

  constructor( private contactService: ContactService, 
              public toastController: ToastController ) { }

  ngOnInit() {
  
  }

  addContactHandler(formData){
    console.log(formData)
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
