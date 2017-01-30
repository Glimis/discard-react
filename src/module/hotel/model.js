import { observable } from 'mobx';
import {Model} from 'Common'

class Order extends Model{

  @observable name = "";
  @observable address = '';
  @observable form = [];

  constructor(obj={}) {
    super(obj);
    this.name=obj.name||'';
    this.address=obj.address||'';
    this.form=obj.form||[];
  }

  proxy(){
      return {
        get:"/api/hotel/:id",
        post:"/api/hotel"
      }
  }


}

export default Order;
