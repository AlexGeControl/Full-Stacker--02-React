import React from 'react';

import { Container } from 'reactstrap';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Button, ButtonGroup, ButtonToolbar } from 'reactstrap';

import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <div className="row">
            <div className="col-12">
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to="/home">Home</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>
                        <Link to="#">Contact Us</Link>
                    </BreadcrumbItem>
                </Breadcrumb>
            </div>
            <div className="col-12">
                <h3>Contact Us</h3>
                <hr />
            </div>
        </div>
    );
}

function AddressInfo() {
    return (
        <div className="row">
            <div className="col-12">
                <h3>Location Information</h3>
            </div>

            <div className="col-12 col-sm-4 offset-sm-1">
                <h5>Our Address</h5>

                <address>
                    121, Clear Water Bay Road<br />
                    Clear Water Bay, Kowloon<br />
                    HONG KONG<br />
                    <i className="fa fa-phone"></i>: +852 1234 5678<br />
                    <i className="fa fa-fax"></i>: +852 8765 4321<br />
                    <i className="fa fa-envelope"></i>:
                    <a href="mailto:confusion@food.net">confusion@food.net</a>
                </address>
            </div>

            <div className="col-12 col-sm-6 offset-sm-1">
                <h5>Map of our Location</h5>
            </div>
        </div>
    );
}

function Methods() {
    return (
        <div className="row">
            <div className="col-12 col-sm-11 offset-sm-1">
                <ButtonToolbar>
                    <ButtonGroup>
                        <Button color="primary" size="lg">
                            <i class="fa fa-phone"></i>
                            Call
                        </Button>
                    </ButtonGroup>
                    <ButtonGroup>
                        <Button color="info" size="lg">
                            <i class="fa fa-fax"></i>
                            Fax
                        </Button>
                    </ButtonGroup>
                    <ButtonGroup>
                        <Button color="success" size="lg">
                            <i class="fa fa-envelope"></i>
                            Email
                        </Button>
                    </ButtonGroup>
                </ButtonToolbar>
            </div>
        </div>
    );
}

function Contact() {
    return (
        <Container>
            <Navigation />

            <AddressInfo />

            <Methods />
        </Container>
    );
}

export default Contact;