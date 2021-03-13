import React from 'react'
import {Navbar,NavbarBrand} from 'reactstrap';
export default function NavBar() {
  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <div className="container">
        <NavbarBrand href="/">BohuBrihi Restaurant</NavbarBrand>

        </div>
        </Navbar>
    </div>
  )
}
