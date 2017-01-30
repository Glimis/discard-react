import React, { Component } from 'react';
import { observer } from 'mobx-react';
// import {Button } from 'Common'
import {Table ,Button,Form,Col,Pagination  } from 'react-bootstrap';
import Store from './store';
import {  Link } from 'react-router'

@observer
export default class OrderForm extends Component{
  constructor(props){
    const list = new Store();
    
    super(props);
    this.state ={
      store:list
    };
    
    this.handleSelect(1);  
  }  

  handleSelect(page){

    this.state.store.load({
      cb:{
        sort:{date:-1},
        page:page
      }
    });
  }
  render(){
    var self=this;
    return (
          <div className='container'>
            <Button><Link to={`/order/add`}>新增</Link></Button>
            <Table responsive>
              <thead>
                <tr>
                  <th>#</th>
                  <th>名称</th>
                  <th>时间</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.state.store.list.map(function (obj,index) {
                    var date=new Date(obj.date);
                    return (
                            <tr>
                              <td>{index+1}</td>
                              <td>{obj.name}</td>
                              <td>{date.getFullYear()+"/"+(date.getMonth()+1)+"/"+date.getDate()}</td>
                              <td><Link to={`/order/`+obj._id}>查看</Link></td>
                            </tr>)
                  })
                }
              </tbody>
            </Table>
            <Pagination
                    prev
                    next
                    first
                    last
                    ellipsis
                    boundaryLinks
                    items={this.state.store.pages}
                    maxButtons={5}
                    activePage={this.state.store.page}
                    onSelect={this.handleSelect.bind(this)}/>
          </div>)
  }
}