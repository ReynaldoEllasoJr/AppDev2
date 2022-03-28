import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  contactlist = [
    {id: 1, name: 'Reynaldo B. Ellaso Jr', email: 'ellasoreyn01@gmail.com'  ,number: '09109679392'},
    {id: 2, name: 'Sanix Metrivs', email: 'sanix213##@gmail.com'  ,number: '09123456789'},
    {id: 3, name: 'Janine Urmeneta', email: 'janineurmenta@gmail.com'  ,number: '093054784555'},
   
  ]

  constructor() {}

}
