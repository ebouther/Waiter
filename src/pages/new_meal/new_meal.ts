import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {MenuService} from '../../app/services/menu.service';

@Component({
  selector: 'page-new_meal',
  templateUrl: 'new_meal.html'
})
export class NewMealPage {

  inputs = {};

  constructor(public navCtrl: NavController,
              private menu: MenuService) {
  }

  submit() {
    this.menu.commands.push(this.inputs);
    this.navCtrl.pop();
    console.log(this.menu.commands);
  }

}
