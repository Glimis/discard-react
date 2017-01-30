import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Order from './model';
import Hotels from '../hotel/store'
import _ from 'lodash'
import { FormGroup,FormControl,DropdownButton,InputGroup,MenuItem ,Button,Form,Col,ControlLabel  } from 'react-bootstrap';
import {  autorun } from 'mobx';

@observer
export default class OrderForm extends Component{
  constructor(props){
    const order = new Order();
    const hotels= new Hotels();
    super(props);
    this.state ={
      order:order,
      hotels:hotels
    };


    //切换
  autorun(() => {
    var id=this.state.order.nameid;
    var hotel=_.find(this.state.hotels.list,function(v){
      return v._id==id;
    })
    
    this.state.order.nameid=hotel._id;
    this.state.order.name=hotel.name;
    this.state.order.address=hotel.address;
    this.state.order.form=_.map(hotel.form,function(v){
      var o={};
      o['name']=v;
      o['value']=0;
      return o;
    });
  });

    hotels.load({
      cb:{
        limit:999
      }
    })
          .then(function(data){
              var list=data.list||[];
              if(list.length>0){
                order.nameid=list[0]._id;
              }
          });
  }  
  change(name,e){
     this.value=e.target.value;
  }
  click(){
    var self=this;
    
    this.state.order.save()
        .then(function(){
            self.props.router.push('/order/list')
        });
  }
  select(e){
    var id=e.target.value;
    this.state.order.nameid=id;
  }
  render(){
    var self=this;
    return (
          <div className='container'>
            <Form horizontal>
              <FormGroup controlId="formControlsSelect">
                <Col sm={2}>
                  <ControlLabel>名称</ControlLabel>
                </Col>
                <Col sm={10}>
                  <FormControl  componentClass="select" placeholder="select" onChange={this.select.bind(self)}>
                    {
                      this.state.hotels.list.map(function (obj) {
                        return (<option value={obj._id}>{obj.name}</option>)
                      })
                    }
                  </FormControl>
                </Col>
              </FormGroup>
              <FormGroup controlId="formControlsSelect">
                <Col sm={2}>
                  <ControlLabel>地址</ControlLabel>
                </Col>
                <Col sm={10}>
                  <FormControl type="text" value={self.state.order.address}  disabled/>
                </Col>
              </FormGroup>
              {
                this.state.order.form.map(function (obj) {
                  var {name,value}=obj;
                  return (<FormGroup controlId="formControlsSelect">
                            <Col sm={2}>
                              <ControlLabel>{name}</ControlLabel>
                            </Col>
                            <Col sm={10}>
                              <FormControl type="number" onChange={self.change.bind(obj,name)} />
                            </Col>
                          </FormGroup>)
                })
              }
              <div className="form-group">
                <div className="col-sm-offset-2 col-sm-10">
                  <button type="button" className="btn btn-default" onClick={self.click.bind(this)}>确定</button>
                </div>
              </div>
            </Form>
          </div>)
  }
}