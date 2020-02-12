import React from 'react';

import { Container } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

function Links() {
    return (
        <div>            
            <h5>Links</h5>

            <ListGroup flush>
                <ListGroupItem>
                    <NavLink to="/home">
                        <span className="fa fa-home fa-lg"></span>
                        Home
                    </NavLink>
                </ListGroupItem>
                <ListGroupItem>
                    <NavLink to="/about">
                        <span className="fa fa-info fa-lg"></span>
                        About
                    </NavLink>
                </ListGroupItem>
                <ListGroupItem>
                    <NavLink to="/menu">
                        <span className="fa fa-list fa-lg"></span>
                        Menu
                    </NavLink>
                </ListGroupItem>
                <ListGroupItem>
                    <NavLink to="/contact">
                        <span className="fa fa-address-card fa-lg"></span>
                        Contact
                    </NavLink>
                </ListGroupItem>
            </ListGroup>
        </div>
    );
}

function Address() {
    return (
        <div>
            <h5>Our Address</h5>
            <address>
                121, Clear Water Bay Road<br />
                Clear Water Bay, Kowloon<br />
                HONG KONG<br />
                <i className="fa fa-phone fa-lg"></i>: +852 1234 5678<br />
                <i className="fa fa-fax fa-lg"></i>: +852 8765 4321<br />
                <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
            </address>
        </div>
    );
}

function SocialNetwork() {
    return (
        <div className="text-center">
            <a className="btn btn-social-icon btn-google" href="http://google.com/+">
                <i className="fa fa-google-plus"></i>
            </a>
            <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id=">
                <i className="fa fa-facebook"></i>
            </a>
            <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/">
                <i className="fa fa-linkedin"></i>
            </a>
            <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/">
                <i className="fa fa-twitter"></i>
            </a>
            <a className="btn btn-social-icon btn-youtube" href="http://youtube.com/">
                <i className="fa fa-youtube"></i>
            </a>
            <a className="btn btn-social-icon" href="mailto:">
                <i className="fa fa-envelope-o"></i>
            </a>
        </div>
    );
}

function Footer() {
    return (
        <div>
            <div className="footer">
                <Container>
                    <div className="row align-items-center">
                        <div className="offset-1 col-4 col-sm-2">
                            <Links />
                        </div>
                        <div className="col-7 col-sm-5">
                            <Address />
                        </div>
                        <div className="col-12 col-sm-4 align-self-center">
                            <SocialNetwork />
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default Footer;