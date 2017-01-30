import React, { Component } from 'react';
import { observer } from 'mobx-react';
// import {Button } from 'Common'
import { FormGroup,FormControl,DropdownButton,InputGroup,MenuItem ,Button,Form,Col  } from 'react-bootstrap';
import Order from './model';


@observer
export default class OrderForm extends Component{
  constructor(props){
    const order = new Order();
    super(props);
    var id=props.params.id;
    if(id){
      order.load({
        id:id
      })
    }
    this.state ={
      order:order,
      addTypeValue:''
    };
  }  
  //修改属性
  changeOrder(name,e){
     this.state.order[name]=e.target.value;
  }
  //修改属性
  changeState(e){
     this.setState({
        addTypeValue:e.target.value
     })
  }  
  //保存
  save(){
    var self=this;
    this.state.order.save()
      .then(function(){
            self.props.router.push('/hotel/list')
        });
  }
  //添加类型
  addType(){
    if(this.state.addTypeValue){
      this.state.order.form.push(this.state.addTypeValue);
    }
    this.setState({
      addTypeValue:""
    })
  }
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
                  <FormControl type="text" value={this.state.order.name} onChange={this.changeOrder.bind(self,'name')} />
                </Col>
              </FormGroup>
              <FormGroup >
                <Col sm={2}>
                  地址
                </Col>
                <Col sm={10}>
                  <FormControl type="text" value={this.state.order.address}  onChange={this.changeOrder.bind(self,'address')}/>
                </Col>
              </FormGroup>
              <FormGroup >
              {
                this.state.order.form.map(function (obj) {
                  return (<label  className="col-sm-2 control-label">{obj}</label>)
                })
              }
              </FormGroup>
              <FormGroup>
                <Col sm={2}>
                  <InputGroup>
                    <FormControl type="text" value={this.state.addTypeValue} onChange={this.changeState.bind(self)} />
                    <InputGroup.Button>
                      <Button onClick={self.addType.bind(self)}>添加类别</Button>
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