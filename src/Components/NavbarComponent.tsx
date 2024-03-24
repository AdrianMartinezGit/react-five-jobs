import React from 'react'
import { Navbar } from 'flowbite-react';
import { Link } from 'react-router-dom';


const NavbarComponent = () => {
  return (
    <div className='fixed w-full bg-gray-100'>
      <div className='sm:px-32'>
        <Navbar fluid rounded>
          <Navbar.Brand as={Link} to={'/'}>
            <span className="self-center whitespace-nowrap text-3xl font-extrabold">Jobs that Interest Me!</span>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Navbar.Link as={Link} to={'/Nvidia'}>Nvidia</Navbar.Link>
            <Navbar.Link as={Link} to={'/Valve'}>Valve</Navbar.Link>
            <Navbar.Link as={Link} to={'/Discord'}>Discord</Navbar.Link>
            <Navbar.Link as={Link} to={'/AMD'}>AMD</Navbar.Link>
            <Navbar.Link as={Link} to={'/Vulkan'}>Khronos</Navbar.Link>
            <Navbar.Link as={Link} to={'https://docs.google.com/document/d/1-CG3AOUCS4-hIX-3FaOJeRXHJSYGYnrlB3jQ3S2jeC4/edit?usp=sharing'}>Document</Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <hr />
    </div>
  )
}

export default NavbarComponent
