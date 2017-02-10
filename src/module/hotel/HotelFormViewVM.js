import { observable } from 'mobx';
import Hotel from 'Model/Hotel'


// const hotel = new Hotel();

// export default {
//   @observable value : "",
//   hotel:hotel,
//   //修改宾馆
//   addType(){
//     var val=this.value;
//     if(!val)return;
//     if(this.hotel.get('form')){
//       this.hotel.get('form').push(val)
//     }else{
//       this.hotel.set('form',[val])
//     }
//   },
//   saveHotel(){
//     return hotel.save()
//   },
//   loadHotel(id){
//     return hotel.load({
//       id:id
//     })
//   }
// }
export default class HotelFormViewVM{
  //追加的类别值
  @observable value = "";

  constructor({id:id}){
      this.hotel=new  Hotel();   
      if(id){
        this.hotel.load({
          id:id
        })
      }
  }

  saveHotel(){
    return this.hotel.save();
  }
  //添加类型
  addType(){
    var val=this.value;
    if(!val)return;
    if(this.hotel.get('form')){
      this.hotel.get('form').push(val)
    }else{
      this.hotel.set('form',[val])
    }
    this.value="";
  }


}
