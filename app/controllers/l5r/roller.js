import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

export default class L5rRollerController extends Controller {
   queryParams = ['ringCount', 'skillCount'];
   
   @tracked ringCount = 3;
   @tracked skillCount = 2;
   
   @tracked model;
}
