import React from 'react';
import { Button } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';

const Header = () => {
    return (
        <div className='container'>
            <Nav
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item className='me-auto'>
        <Nav.Link href="/home">ATools</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Button variant="dark">Satrt Free Trail</Button>{' '}
      <Button className='ms-2' variant="warning">LogIn</Button>{' '}

      </Nav.Item>
      
     
    </Nav>
        </div>
    );
};

export default Header;