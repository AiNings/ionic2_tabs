import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the WorkMapPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-work-map',
  templateUrl: 'work-map.html',
})
export class WorkMapPage {
  toolbar = true;
  params = {
    draggable: true,
    click: false,
    searchBar: true,
    navigation: true,
    address: '',
    position: {
      lng: '',
      lat: ''
    }
  };
  constructor(public navCtrl: NavController,
              public viewCtrl: ViewController,
              public navParams: NavParams) {
    Object.assign(this.params, this.navParams.get('params'));
    this.toolbar = this.navParams.get('toolbar');
  }

}
