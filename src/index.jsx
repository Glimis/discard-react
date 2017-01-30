import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Order from './module/order/model';

import App from './App';
import OrderForm from './module/order/orderForm'
import HotelForm from './module/hotel/HotelForm'
import OrderFormShow from './module/order/OrderFormShow'

import HotelList from './module/hotel/HotelList'
import OrderList from './module/order/orderList'

import { Navbar,Nav,NavItem ,NavDropdown ,MenuItem  } from 'react-bootstrap';
import { Router, Route, Link, browserHistory,IndexRoute  } from 'react-router'




render(
  <AppContainer>
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="/hotel/list" component={HotelList}/>  
            <Route path="/hotel/:id" component={HotelForm}/>    
            <Route path="/hotel/add" component={HotelForm}/>
            <Route path="/order/add" component={OrderForm}/>
            <Route path="/order/list" component={OrderList}/>
            <Route path="/order/:id" component={OrderFormShow}/>   
        </Route>
  </Router>
  </AppContainer>,


  document.getElementById('root')
);

// render(
//   <AppContainer>
//     <div>
//         <Navbar inverse collapseOnSelect>
//             <Navbar.Header>
//               <Navbar.Brand>
//                 <a href="#">JSCL-清洗部</a>
//               </Navbar.Brand>
//               <Navbar.Toggle />
//             </Navbar.Header>
//             <Navbar.Collapse>
//               <Nav>
//                 <NavItem eventKey={1} href="#">添加宾馆</NavItem>
//                 <NavItem eventKey={2} href="#">添加订单</NavItem>
//               </Nav>
//             </Navbar.Collapse>
//         </Navbar>
//         <div className="container">   
//             <OrderForm  order={order}/>
//         </div>
//     </div>
//   </AppContainer>,
//   document.getElementById('root')
// );
