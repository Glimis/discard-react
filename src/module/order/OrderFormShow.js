import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Order from './model';
import Hotels from '../hotel/store'
import _ from 'lodash'
import { FormGroup,FormControl,DropdownButton,InputGroup,MenuItem ,Button,Form,Col,ControlLabel  } from 'react-bootstrap';
import {  autorun } from 'mobx';
import {  Link } from 'react-router'
@observer
export default class OrderForm extends Component{
  constructor(props){
    const order = new Order();
    order.load({
      id:props.params.id
    })
    super(props);
    this.state ={
      order:order
    };
  }  

  render(){
    var self=this;
    return (
          <div className='container'>
            <Form horizontal>
              <FormGroup controlId="formControlsSelect1">
                <Col sm={2}>
                  <ControlLabel>时间</ControlLabel>
                </Col>
                <Col sm={10}>
                  <FormControl type="text" value={self.state.order.date}  disabled/>
                </Col>
              </FormGroup>
              <FormGroup controlId="formControlsSelect2">
                <Col sm={2}>
                  <ControlLabel>名称</ControlLabel>
                </Col>
                <Col sm={10}>
                  <FormControl type="text" value={self.state.order.name}  disabled/>
                </Col>
              </FormGroup>
              <FormGroup controlId="formControlsSelect3">
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
                              <FormControl type="number" value={value} disabled />
                            </Col>
                          </FormGroup>)
                })
              }
              <div className="form-group">
                <div className="col-sm-offset-2 col-sm-10">
                  <button type="button" className="btn btn-default" ><Link to={`/order/list`}>返回</Link></button>
                </div>
              </div>
            </Form>
          </div>)
  }
}