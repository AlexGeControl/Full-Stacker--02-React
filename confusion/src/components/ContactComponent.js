import React, { Component } from 'react';

import { Container } from 'reactstrap';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Button, ButtonGroup, ButtonToolbar } from 'reactstrap';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { FormFeedback } from 'reactstrap';

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

class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstname: '',
            lastname: '',

            areacode: '',
            telnum: '',

            email: '',

            approved: false,
            approach: 'E-Mail',

            feedback: '',

            errors: {
                firstname: '',
                lastname: '',
                email: '',
                telnum: ''
            }
        };

        this.onInputChage = this.onInputChage.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onInputChage(event) {
        const target = event.target;

        const name = target.name;
        const value = target.type === "checkbox" ? target.checked : target.value;

        const validateField = ({name, value}) => {
            const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/);
            const validTelnumRegex = RegExp(/^\d+$/);
    
            let errors = this.state.errors;
    
            switch (name) {
                case 'firstname':
                    if (value.length < 3)
                        errors.firstname = 'First Name should be more than 2 characters';
                    else if (value.length > 9)
                        errors.firstname = 'First Name should be less than 10 characters';
                    else
                        errors.firstname = '';
                    break;
                case 'lastname':
                    if (value.length < 3)
                        errors.lastname = 'Last Name should be more than 2 characters';
                    else if (value.length > 9)
                        errors.lastname = 'Last Name should be less than 10 characters';
                    else
                        errors.lastname = '';
                    break;
                case 'email':
                    if (!validEmailRegex.test(value)) 
                        errors.email = 'Invalid E-Mail address';
                    else
                        errors.email = '';
                    break;
                case 'telnum':
                    if (!validTelnumRegex.test(value)) 
                        errors.telnum = 'Tel. Number should contain only numbers';
                    else 
                        errors.telnum = '';
                    break;
                default:
                    break;
            }
    
            return errors;
        }

        let errors = validateField({ name: name, value: value });

        this.setState(
            {
                [name]: value,
                errors: errors
            }
        )
    }

    onSubmit(event) {
        const validateForm = ({errors}) => {
            let valid = true;

            Object.values(errors).forEach(
                (error) => {
                    (error.length !== 0) && (valid = false)
                }
            )

            return valid;
        }

        let valid = validateForm({errors: this.state.errors})
        alert(valid ? 'Valid Form' : 'Invalid Form');
        
        // prevent default behavior: form submit
        event.preventDefault();
    }

    FeedbackForm() {
        return (
            <div className="row row-content">
                <div className="col-12">
                    <h3>Send us your Feedback</h3>
                </div>
                <div className="col-12 col-md-9 mt-5">
                    <Form onSubmit={this.onSubmit}>
                        <FormGroup>
                            <div className="row align-items-center">
                                <div className="col-12 col-md-2">
                                    <Label for="firstname">First Name</Label>
                                </div>
                                <div className="col-md-10">
                                    <Input 
                                        type="text" name="firstname" id="firstname" placeholder="First Name"
                                        value={this.state.firstname}
                                        onChange={this.onInputChage}
                                        valid={this.state.errors.firstname === ''}
                                        invalid={this.state.errors.firstname !== ''}
                                    />
                                    <FormFeedback>{this.state.errors.firstname}</FormFeedback>
                                </div>
                            </div>
                        </FormGroup>
                        <FormGroup>
                            <div className="row align-items-center">
                                <div className="col-12 col-md-2">
                                    <Label for="lastname">Last Name</Label>
                                </div>
                                <div className="col-md-10">
                                    <Input 
                                        type="text" name="lastname" id="lastname" placeholder="Last Name"
                                        value={this.state.lastname}
                                        onChange={this.onInputChage}
                                        valid={this.state.errors.lastname === ''}
                                        invalid={this.state.errors.lastname !== ''} 
                                    />
                                    <FormFeedback>{this.state.errors.lastname}</FormFeedback>
                                </div>
                            </div>
                        </FormGroup>
                        <FormGroup>
                            <div className="row align-items-center">
                                <div className="col-12 col-md-2">
                                    <Label for="telnum">Contact</Label>
                                </div>
                                <div className="col-5 col-md-3">
                                    <Input 
                                        type="tel" name="areacode" id="areacode" placeholder="Area Code" 
                                        value={this.state.areacode}
                                        onChange={this.onInputChage}
                                    />
                                </div>
                                <div className="col-7 col-md-7">
                                    <Input 
                                        type="tel" name="telnum" id="telnum" placeholder="Tel. Number" 
                                        value={this.state.telnum}
                                        onChange={this.onInputChage}
                                        valid={this.state.errors.telnum === ''}
                                        invalid={this.state.errors.telnum !== ''} 
                                    />
                                    <FormFeedback>{this.state.errors.telnum}</FormFeedback>
                                </div>
                            </div>
                        </FormGroup>
                        <FormGroup>
                            <div className="row align-items-center">
                                <div className="col-12 col-md-2">
                                    <Label for="telnum">Contact</Label>
                                </div>
                                <div className="col-12 col-md-10">
                                    <Input 
                                        type="email" name="email" id="email" placeholder="E-Mail" 
                                        value={this.state.email}
                                        onChange={this.onInputChage}
                                        valid={this.state.errors.email === ''}
                                        invalid={this.state.errors.email !== ''} 
                                    />
                                    <FormFeedback>{this.state.errors.email}</FormFeedback>
                                </div>
                            </div>  
                        </FormGroup>
                        <FormGroup>
                            <div className="row align-items-center">
                                <div className="col-md-6 offset-md-2">
                                    <FormGroup check>
                                        <Input 
                                            type="checkbox" name="approved" id="approved" value="" 
                                            checked={this.state.approved}
                                            onChange={this.onInputChage}
                                        />
                                        <Label check for="approved">
                                            <strong>May We Contact You?</strong>
                                        </Label>
                                    </FormGroup>
                                </div>
                                <div className="col-md-3 offset-md-1">
                                    <FormGroup>
                                        <Input 
                                            type="select" name="approach" id="approach"
                                            value={this.state.approach}
                                            onChange={this.onInputChage}
                                        >
                                            <option>Tel. Number</option>
                                            <option>E-Mail</option>
                                        </Input>
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
                                    <Input 
                                        type="textarea" id="feedback" name="feedback" rows="12" 
                                        value={this.state.feedback}
                                        onChange={this.onInputChage}
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

    render() {
        return (
            <Container>
                <Navigation />

                <AddressInfo />

                <Methods />

                {this.FeedbackForm()}
            </Container>
        );
    }
}

export default Contact;