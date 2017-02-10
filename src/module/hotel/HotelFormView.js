import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { FormGroup,FormControl,DropdownButton,InputGroup,MenuItem ,Button,Form,Col  } from 'react-bootstrap';
// import Hotel from 'Model/Hotel'
import VM from './HotelFormViewVM'

@observer
export default class HotelFormView extends Component{
  constructor(props){
    super(props);
    var id=props.params.id
    this.vm=new VM({id:id});
  }  
  //修改属性
  changeHotel(name,e){
    this.vm.hotel.set(name,e.target.value) 
  }
  //修改属性
  changeState(value){
     this.setState({
        addTypeValue:value
     })
  }  
  changeStateHandle(e){
    this.vm.value=e.target.value
  }
  //保存
  async save(){
    await this.vm.saveHotel(); 
    this.props.router.push('/hotel/list')
  }
  //添加类型
  // addType(){
  //   if(this.state.addTypeValue){
  //     if(this.hotel.get('form')){
  //       this.hotel.get('form').push(this.state.addTypeValue)
  //     }else{
  //       this.hotel.set('form',[this.state.addTypeValue])
  //     }
  //   }
  //   this.changeState('');
  // }
  render(){
    var self=this;
    return (
          <div className='container'>
            <Form horizontal>
              <FormGroup >
                <Col sm={2}>
                  名称
                </Col>
                <Col sm={10}>
                  <FormControl type="text" value={this.vm.hotel.get('name')} onChange={this.changeHotel.bind(self,'name')} />
                </Col>
              </FormGroup>
              <FormGroup >
                <Col sm={2}>
                  地址
                </Col>
                <Col sm={10}>
                  <FormControl type="text" value={this.vm.hotel.get('address')}  onChange={this.changeHotel.bind(self,'address')}/>
                </Col>
              </FormGroup>
              <FormGroup >
              {
                  this.vm.hotel.get('form')&&this.vm.hotel.get('form').map(function (obj) {
                    return (<label  className="col-sm-2 control-label">{obj}</label>)
                  })
              }
              </FormGroup>
              <FormGroup>
                <Col sm={2}>
                  <InputGroup>
                    <FormControl type="text" value={this.vm.value}  onChange={this.changeStateHandle.bind(self)}/>
                    <InputGroup.Button>
                      <Button onClick={self.vm.addType.bind(self.vm)}>添加类别</Button>
                    </InputGroup.Button>                  
                  </InputGroup>
                 </Col> 
              </FormGroup>
              <FormGroup >
                <Col sm={2}>
                  <Button onClick={self.save.bind(self)}>保存状态</Button>
                </Col>
              </FormGroup>
            </Form>  
          </div>)
  }
}