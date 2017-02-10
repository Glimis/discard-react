import React, { Component } from 'react';
import { render } from 'react-dom';
import { Navbar,Nav,NavItem ,NavDropdown ,MenuItem  } from 'react-bootstrap';
import { Router, Route, Link, browserHistory } from 'react-router'


class App extends Component {
  render() {
    return (
      <div>
          <Navbar inverse collapseOnSelect>
              <Navbar.Header>
                <Navbar.Brand>
                  <a href="#">JSCL-清洗部</a>
                </Navbar.Brand>
                <Navbar.Toggle />
              </Navbar.Header>
              <Navbar.Collapse>
                <Nav>
                  <li><Link to={`/hotel/list`}>宾馆</Link></li>
                  <li><Link to={`/order/list`}>订单</Link></li>
                </Nav>
              </Navbar.Collapse>
          </Navbar>
           {this.props.children}
      </div>
    );
  }
};

export default App;
    