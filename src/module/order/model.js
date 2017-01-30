import { observable } from 'mobx';
import {Model} from 'Common'

class Order extends Model{

  @observable name = "";
  @observable date = 0;
  @observable form = [];
  @observable nameid = "";
  constructor(obj={}) {
    super(obj);
    this.name=obj.name||'';
    this.date=obj.date;
    this.form=obj.form||[]
  }

  proxy(){
      return {
        get:window.location.origin+"/api/order/:id",
        post:window.location.origin+"/api/order"
      }
  }


}

export default Order;
