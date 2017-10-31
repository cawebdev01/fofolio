import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GlobalserviceProvider } from '../../providers/globalservice/globalservice'

import { PhotoList } from '../photo-list/photo-list'
import { WebList } from '../web-list/web-list'
import { VideoList} from '../video-list/video-list'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    private globalservice: GlobalserviceProvider,  
  ) {
    this.slideConstructor()
  }
  datas;
  slideConstructor(){
    this.globalservice.homeloader().subscribe(datas =>{
      this.datas = datas
    })
  }
  webhome(){
    this.navCtrl.push(WebList)
  }
  photohome(){
    this.navCtrl.push(PhotoList)
  }
  videohome(){
    this.navCtrl.push(VideoList)
  }
}
