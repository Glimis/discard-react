import React, { Component } from 'react';
import { observer } from 'mobx-react';
import {Table ,Button,Form,Col  } from 'react-bootstrap';
import {  Link } from 'react-router'
import Hotels from 'Store/Hotel'



@observer
export default class OrderForm extends Component{
  constructor(props){
    super(props);
    var hotels=this.hotels=new Hotels();
    hotels.load();
  }  
  render(){
    var self=this;
    return (
          <div className='container'>
            <Button><Link to={`/hotel/add`}>新增</Link></Button>
            <Table responsive>
              <thead>
                <tr>
                  <th>#</th>
                  <th>名称</th>
                  <th>地址</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {
                  this.hotels.getList().map(function (obj,index) {
                    return (
                            <tr>
                              <td>{index+1}</td>
                              <td>{obj.name}</td>
                              <td>{obj.address}</td>
                              <td><Link to={`/hotel/`+obj._id}>修改</Link></td>
                            </tr>)
                  })
                }

              </tbody>
            </Table>
          </div>)
  }
}