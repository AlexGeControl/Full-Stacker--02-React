import React, { Component } from 'react';

import { Form, Control, Errors} from 'react-redux-form';

import { Container } from 'reactstrap';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Button, ButtonGroup, ButtonToolbar } from 'reactstrap';
import { FormGroup, Label } from 'reactstrap';

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
            <div className="col-12 m-3">
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
                            <i className="fa fa-phone"></i>
                            Call
                        </Button>
                    </ButtonGroup>
                    <ButtonGroup>
                        <Button color="info" size="lg">
                            <i className="fa fa-fax"></i>
                            Fax
                        </Button>
                    </ButtonGroup>
                    <ButtonGroup>
                        <Button color="success" size="lg">
                            <i className="fa fa-envelope"></i>
                            Email
                        </Button>
                    </ButtonGroup>
                </ButtonToolbar>
            </div>
        </div>
    );
}

function Contact(props) {
    const FeedbackForm = () => {
        // validators:
        const required = (value) => value && value.length;
        const minLength = (len) => (value) => (!value) || (value.length >= len);
        const maxLength = (len) => (value) => value && (value.length <= len);
        const validTelNum = (value) => RegExp(/^\d+$/).test(value);
        const validEmail = (value) => RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/).test(value);
        
        // on submit:
        const onSubmit = (values) => {
            // TODO: push inputs to server
            alert(JSON.stringify(values));

            // reset values:
            props.resetFeedbackForm();
        }

        return (
            <div className="row row-content">
                <div className="col-12">
                    <h3>Send us your Feedback</h3>
                </div>
                <div className="col-12 col-md-9 mt-5">
                    <Form 
                        model="feedback"
                        onSubmit={(values) => onSubmit(values)}
                    >
                        <FormGroup>
                            <div className="row align-items-center">
                                <div className="col-12 col-md-2">
                                    <Label for="firstname">First Name</Label>
                                </div>
                                <div className="col-md-10">
                                    <Control.text className="form-control"
                                        model=".firstname" id="firstname"
                                        name="firstname" placeholder="First Name"
                                        validators={
                                            {
                                                required: required,
                                                minLength: minLength(3),
                                                maxLength: maxLength(10)
                                            }
                                        }
                                    />
                                    <Errors className="text-danger"
                                        model=".firstname" show="touched"
                                        messages={
                                            {
                                                required: 'Required',
                                                minLength: 'First Name should be more than 2 characters',
                                                maxLength: 'First Name should be no more than 10 characters'
                                            }
                                        }
                                     />
                                </div>
                            </div>
                        </FormGroup>
                        <FormGroup>
                            <div className="row align-items-center">
                                <div className="col-12 col-md-2">
                                    <Label for="lastname">Last Name</Label>
                                </div>
                                <div className="col-md-10">
                                    <Control.text className="form-control"
                                        model=".lastname" id="lastname"
                                        name="lastname"  placeholder="Last Name"
                                        validators={
                                            {
                                                required: required,
                                                minLength: minLength(3),
                                                maxLength: maxLength(10)
                                            }
                                        }
                                    />
                                    <Errors className="text-danger"
                                        model=".lastname" show="touched"
                                        messages={
                                            {
                                                required: 'Required',
                                                minLength: 'Last Name should be more than 2 characters',
                                                maxLength: 'Last Name should be no more than 10 characters'
                                            }
                                        }
                                     />
                                </div>
                            </div>
                        </FormGroup>
                        <FormGroup>
                            <div className="row align-items-center">
                                <div className="col-12 col-md-2">
                                    <Label for="telnum">Contact</Label>
                                </div>
                                <div className="col-5 col-md-3">
                                    <Control.text className="form-control"
                                        model=".areacode" id="areacode" 
                                        name="areacode" placeholder="Area Code" 
                                        validators={
                                            {
                                                required: required,
                                                validTelNum: validTelNum
                                            }
                                        }                                        
                                    />
                                    <Errors className="text-danger"
                                        model=".areacode" show="touched"
                                        messages={
                                            {
                                                required: 'Required',
                                                validTelNum: 'Invalid'
                                            }
                                        }
                                     />
                                </div>
                                <div className="col-7 col-md-7">
                                    <Control.text className="form-control"
                                        model=".telnum" id="telnum"
                                        name="telnum" placeholder="Tel. Number"
                                        validators={
                                            {
                                                required: required,
                                                validTelNum: validTelNum
                                            }
                                        }                                           
                                    />
                                    <Errors className="text-danger"
                                        model=".telnum" show="touched"
                                        messages={
                                            {
                                                required: 'Required',
                                                validTelNum: 'Invalid'
                                            }
                                        }
                                    />
                                </div>
                            </div>
                        </FormGroup>
                        <FormGroup>
                            <div className="row align-items-center">
                                <div className="col-12 col-md-2">
                                    <Label for="telnum">Contact</Label>
                                </div>
                                <div className="col-12 col-md-10">
                                    <Control.text className="form-control"
                                        model=".email" id="email" 
                                        name="email" placeholder="E-Mail"
                                        validators={
                                            {
                                                required: required,
                                                validEmail: validEmail
                                            }
                                        }                                         
                                    />
                                    <Errors className="text-danger"
                                        model=".email" show="touched"
                                        messages={
                                            {
                                                required: 'Required',
                                                validEmail: 'Invalid E-Mail'
                                            }
                                        }
                                    />
                                </div>
                            </div>  
                        </FormGroup>
                        <FormGroup>
                            <div className="row align-items-center">
                                <div className="col-md-6 offset-md-2">
                                    <FormGroup check>
                                        <Control.checkbox model=".approved" id="approved" 
                                            name="approved"
                                            className="form-check-input"
                                        />
                                        <Label check for="approved">
                                            <strong>May We Contact You?</strong>
                                        </Label>
                                    </FormGroup>
                                </div>
                                <div className="col-md-3 offset-md-1">
                                    <FormGroup>
                                        <Control.select model=".approach" id="approach"
                                            name="approach" id="approach"
                                            className="form-control"
                                        >
                                            <option>Tel. Number</option>
                                            <option>E-Mail</option>
                                        </Control.select>
                                    </FormGroup>
                                </div>
                            </div>
                        </FormGroup>
                        <FormGroup>
                            <div className="row align-items-center">
                                <div className="col-12 col-md-2">
                                    <Label for="feedback">Your Feedback</Label>
                                </div>
                                <div className="col-12 col-md-10">
                                    <Control.textarea model=".feedback" id="feedback" 
                                        name="feedback" rows="12"
                                        className="form-control" 
                                    />
                                </div>
                            </div>
                        </FormGroup>
                        <FormGroup>
                            <div className="row">
                                <div className="col-md-10 offset-md-2">
                                    <Button type="submit" color="primary">Submit Feedback</Button>
                                </div>
                            </div>
                        </FormGroup>
                    </Form>
                </div>
            </div>
        );
    }

    return (
        <Container>
            <Navigation />

            <AddressInfo />

            <Methods />

            <FeedbackForm />
        </Container>
    );
}

export default Contact;