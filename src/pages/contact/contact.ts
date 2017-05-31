import { Component } from '@angular/core';
import { NavController, PopoverController } from 'ionic-angular';

import {MenuService} from '../../app/services/menu.service';

import {NewMealPage} from '../new_meal/new_meal';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  mealPage: any;

  constructor(public navCtrl: NavController,
              public popoverCtrl: PopoverController,
              private menu: MenuService) {
    this.mealPage = NewMealPage;
  }

  newMeal() {
    let popover = this.popoverCtrl.create(NewMealPage);
    popover.present();
  }

}
