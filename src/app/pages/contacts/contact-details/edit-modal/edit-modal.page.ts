import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IContact } from 'src/app/interfaces/icontact';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.page.html',
  styleUrls: ['./edit-modal.page.scss'],
})
export class EditModalPage implements OnInit, OnDestroy {

  userId: number = null;
  contactData: IContact;

  //reactive form ts 
  contactDetailsForm = new FormGroup({ // 1. create FormGroup
    name: new FormControl('', Validators.required) // 2. create new FormControl for form fields
  });

  constructor(private navParams: NavParams, private modalController: ModalController) {
    
  }

  ngOnInit() {
    console.log(this.navParams);
    this.contactData = this.navParams.data as IContact;
    this.userId = this.navParams.data.id;
  }

  updateContact(){
    console.log(this.contactData);
    //ToDo: send a put request 
    //after update close the modal automatically
  }

  closeEditModal(){
    this.modalController.dismiss();
  }

  ngOnDestroy(){
    console.log("Destroy hook");
    //remove the contactData;
  }

}

