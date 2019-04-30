import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { IContact } from 'src/app/interfaces/icontact';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  isLoaded: boolean = false;
  contactList: IContact[];

  constructor( private contactService: ContactService) { }

  ngOnInit() {
    //just to mock the spinner in screen using timeout here

    setTimeout( () => {
      this.contactService.getContacts()
                .subscribe( (resp: IContact[]) => {
                  this.contactList = resp;
                  this.isLoaded = true;
                });
    }, 4000);
    
  }

}
