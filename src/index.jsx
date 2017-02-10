import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';


import App from './App';
import HotelListView from './module/hotel/HotelListView'
import HotelFormView from './module/hotel/HotelFormView'
import OrderListView from './module/order/OrderListView'
import OrderFormView from './module/order/OrderFormView'
import OrderFormShowView from './module/order/OrderFormShowView'


import { Navbar,Nav,NavItem ,NavDropdown ,MenuItem  } from 'react-bootstrap';
import { Router, Route, Link, browserHistory,IndexRoute  } from 'react-router'




render(
  <AppContainer>
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="/hotel/list" component={HotelListView}/>
            <Route path="/hotel/:id" component={HotelFormView}/>    
            <Route path="/hotel/:id" component={HotelFormView}/>  
            <Route path="/order/list" component={OrderListView}/>  
            <Route path="/order/add" component={OrderFormView}/>  
            <Route path="/order/:id" component={OrderFormShowView}/>  
        </Route>
  </Router>
  </AppContainer>,
  document.getElementById('root')
);

