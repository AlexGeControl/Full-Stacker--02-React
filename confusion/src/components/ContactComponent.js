import React from 'react';

import { Container } from 'reactstrap';
import { Button, ButtonGroup, ButtonToolbar } from 'reactstrap';

function Header() {
    return (
        <div>
            <h3>Location Information</h3>
        </div>
    );
}

function AddressAsText() {
    return (
        <div>
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
    );
}

function AddressAsGeoLocation() {
    return (
        <div>
            <h5>Map of our Location</h5>
        </div>
    );
}

function Methods() {
    return (
        <div>
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
    );
}

function Contact() {
    return (
        <Container>
            <div className="row row-content">
                <div className="col-12">
                    <Header />
                </div>

                <div className="col-12 col-sm-4 offset-sm-1">
                    <AddressAsText />
                </div>

                <div className="col-12 col-sm-6 offset-sm-1">
                    <AddressAsGeoLocation />
                </div>

                <div className="col-12 col-sm-11 offset-sm-1">
                    <Methods />
                </div>
            </div>
        </Container>
    );
}

export default Contact;