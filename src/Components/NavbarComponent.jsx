import React from 'react'
import { Navbar } from 'flowbite-react'
import { Link } from 'react-router-dom';

const NavbarComponent = () => {
  return (
    <>
      <Navbar fluid>
        <Navbar.Brand href="/">
          <span className="self-center whitespace-nowrap text-3xl font-semibold dark:text-white">Jobs that Interest Me!</span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="/jobone"><p className='text-3xl'>Job One</p></Navbar.Link>
          <Navbar.Link href="/jobtwo"><p className='text-3xl'>Job Two</p></Navbar.Link>
          <Navbar.Link href="/jobthree"><p className='text-3xl'>Job Three</p></Navbar.Link>
          <Navbar.Link href="/jobfour"><p className='text-3xl'>Job Four</p></Navbar.Link>
          <Navbar.Link href="/jobfive"><p className='text-3xl'>Job Five</p></Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
      <hr />
    </>
  );
}

export default NavbarComponent
