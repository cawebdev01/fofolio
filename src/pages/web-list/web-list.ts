import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GlobalserviceProvider } from '../../providers/globalservice/globalservice'

@Component({
  selector: 'page-web-list',
  templateUrl: 'web-list.html',
})
export class WebList {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private globalservice: GlobalserviceProvider, 
  ) {
  }

}
