import React, {Component } from 'react';

import { Jumbotron, Container } from 'reactstrap';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, NavbarToggler, Collapse } from 'reactstrap';

/*
    nav-bar
 */
class Navigation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            collapsed: true
        };
    }

    onToggle() {
        this.setState(
            { collapsed: !this.state.collapsed }
        )
    }

    render() {
        return (
            <div>
                <Navbar dark className="navbar-expand-sm fixed-top">
                    <Container>
                        <NavbarBrand className="mr-auto" href="/" >
                            <img className="img-responsive" src="assets/images/logo.png" alt="logo" height="30" width="41"/>
                            Ristorante con Fusion
                        </NavbarBrand>
            
                        <NavbarToggler onClick={() => {this.onToggle()}} />

                        <Collapse isOpen={!this.state.collapsed} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink href="/home">
                                        <span className="fa fa-home fa-lg"></span>
                                        Home
                                    </NavLink>
                                </NavItem>
        
                                <NavItem>
                                    <NavLink href="/about">
                                        <span className="fa fa-info fa-lg"></span>
                                        About
                                    </NavLink>
                                </NavItem>
        
                                <NavItem>
                                    <NavLink href="/menu">
                                        <span className="fa fa-list fa-lg"></span>
                                        Menu
                                    </NavLink>
                                </NavItem>
        
                                <NavItem>
                                    <NavLink href="/contact">
                                        <span className="fa fa-address-card fa-lg"></span>
                                        Contact
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

function Jumbo() {
    return (
        <div>
            <Jumbotron>
                <Container>
                    <div className="row row-header">
                        <div className="col-12 col-sm-6">
                            <h1>Ristorante con Fusion</h1>
                            <p className="lead">We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                        </div>
                        <div className="col-12 col-sm">
                            <img className="img-responsive" src="assets/images/logo.png" alt="logo"/>
                        </div>
                    </div>
                </Container>
            </Jumbotron>
        </div>
    );
}

function Header() {
    return (
        <div>
            <Navigation />
            <Jumbo />
        </div>
    );
}

export default Header;