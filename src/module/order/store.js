import { observable } from 'mobx';
import {Store} from 'Common'



export default  class Hotels extends Store{
  @observable list = [];

  constructor(obj={}) {
    super(obj);
  }

  proxy(){
      return {
        get:"/api/order",
        post:"/api/order"
      }
  }


}