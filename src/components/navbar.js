import React from 'react';
import {
    Navbar,
    NavItem,
    NavbarToggler,
    Collapse,
    NavLink,
    Nav,
    NavbarBrand
} from 'reactstrap';
function NavMain(props) {
    const [isOpen, setIsOpen] = React.useState(false);
  
    return (
        <div>

            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Brand</NavbarBrand>
                <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="#">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Login</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Signup</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div >
    );}

export default NavMain;