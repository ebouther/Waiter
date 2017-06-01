import { Component } from '@angular/core';
import { NavController, PopoverController } from 'ionic-angular';

import {MenuService} from '../../app/services/menu.service';

import {NewMealPage} from '../new_meal/new_meal';

@Component({
  selector: 'page-command',
  templateUrl: 'command.html'
})
export class CommandPage {

  private table = 0;
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

  increment(index) {
    this.menu.commands[index].nb++;
  }

  decrement(index) {
    if (--this.menu.commands[index].nb <= 0)
      this.menu.commands.splice(index, 1);
  }

  trackByIndex(index: number, obj: any): any {
    return index;
  }

}
