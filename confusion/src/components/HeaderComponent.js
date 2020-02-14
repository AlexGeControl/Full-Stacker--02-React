import React, {Component } from 'react';

import { Jumbotron, Container } from 'reactstrap';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Button, NavbarToggler, Collapse } from 'reactstrap';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Form, FormGroup, Label, Input } from 'reactstrap';

/*
    nav-bar
 */
class Navigation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isNavCollapsed: true,
            isLoginOpen: false
        };
    }

    onNavToggle() {
        this.setState(
            { isNavCollapsed: !this.state.isNavCollapsed }
        )
    }

    onLoginToggle() {
        this.setState(
            { isLoginOpen: !this.state.isLoginOpen }
        )
    }

    onLogin = (event) => {
        event.preventDefault();

        console.log(
            this.account
        );
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
            
                        <NavbarToggler onClick={() => {this.onNavToggle()}} />

                        <Collapse isOpen={!this.state.isNavCollapsed} navbar>
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

                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Button outline onClick={() => this.onLoginToggle()}>
                                        <span className="fa fa-sign-in fa-lg"></span>
                                        Login
                                    </Button>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>

                    <Modal isOpen={this.state.isLoginOpen} toggle={() => this.onLoginToggle()}>
                        <ModalHeader toggle={() => this.onLoginToggle()} charCode="X">
                            Login
                        </ModalHeader>
                        
                        <ModalBody>
                            <Form onSubmit={this.onLogin}>
                                <div className="form-row align-items-center">
                                    <div className="col-12 col-sm-4">
                                        <FormGroup>
                                            <Label className="sr-only" for="account">E-Mail</Label>
                                            <Input 
                                                type="email" id="account" name="account" placeholder="E-Mail" 
                                                ref={(input) => {this.account = input}}
                                            />
                                        </FormGroup>
                                    </div>
                                    <div className="col-12 col-sm-4">
                                        <FormGroup>
                                            <Label className="sr-only" for="password">Password</Label>
                                            <Input 
                                                type="password" id="password" name="password" placeholder="Password" 
                                            />
                                        </FormGroup>
                                    </div>
                                    <div className="col-12 col-sm-auto">
                                        <FormGroup check>
                                            <Input 
                                                type="checkbox" name="rememberme" id="rememberme"
                                            />
                                            <Label check for="rememberme">
                                                <strong>Remember Me</strong>
                                            </Label>
                                        </FormGroup>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <FormGroup>
                                        <Button 
                                            className="ml-auto" color="secondary" type="button" 
                                            onClick={() => this.onLoginToggle()}
                                        >
                                            Cancel
                                        </Button>
                                        <Button 
                                            className="ml-1" color="primary" type="submit" 
                                        >
                                            Login
                                        </Button>
                                    </FormGroup>
                                </div>
                            </Form>
                        </ModalBody>
                    </Modal>
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