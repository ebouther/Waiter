import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import {MenuService} from '../../app/services/menu.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
              private alertCtrl: AlertController,
              private menu: MenuService) {

  }

  addMeat() {
    let prompt = this.alertCtrl.create({
        title: 'Add Meat',
        inputs: [{
            name: 'name'
        }],
        buttons: [
            {
                text: 'Cancel'
            },
            {
                text: 'Add',
                handler: data => {
                    this.menu.meats.push(data);
                }
            }
        ]
    });
    prompt.present();
  }
  editMeat(meat) {
        let prompt = this.alertCtrl.create({
            title: 'Edit',
            inputs: [{
                name: 'name'
            }],
            buttons: [
                {
                    text: 'Cancel'
                },
                {
                    text: 'Save',
                    handler: data => {
                        let index = this.menu.meats.indexOf(meat);

                        if(index > -1){
                          this.menu.meats[index] = data;
                        }
                    }
                }
            ]
        });
        prompt.present();
    }
    deleteMeat(meat) {
        let index = this.menu.meats.indexOf(meat);
        if (index > -1) {
            this.menu.meats.splice(index, 1);
        }
    }


    addMeal() {
      let prompt = this.alertCtrl.create({
          title: 'Add Meal',
          inputs: [{
              name: 'name'
          }],
          buttons: [
              {
                  text: 'Cancel'
              },
              {
                  text: 'Add',
                  handler: data => {
                      this.menu.meals.push(data);
                  }
              }
          ]
      });
      prompt.present();
    }
    editMeal(meal) {
          let prompt = this.alertCtrl.create({
              title: 'Edit',
              inputs: [{
                  name: 'name'
              }],
              buttons: [
                  {
                      text: 'Cancel'
                  },
                  {
                      text: 'Save',
                      handler: data => {
                          let index = this.menu.meals.indexOf(meal);

                          if(index > -1){
                            this.menu.meals[index] = data;
                          }
                      }
                  }
              ]
          });
          prompt.present();
      }
      deleteMeal(meal) {
          let index = this.menu.meals.indexOf(meal);
          if (index > -1) {
              this.menu.meals.splice(index, 1);
          }
      }

}
