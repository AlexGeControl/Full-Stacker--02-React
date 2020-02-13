import React from 'react';

import { Container } from 'reactstrap';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Media } from 'reactstrap';

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
                        <Link to="#">About Us</Link>
                    </BreadcrumbItem>
                </Breadcrumb>
            </div>
            <div className="col-12">
                <h3>About Us</h3>
                <hr />
            </div>
        </div>
    );
}

function History() {
    return (
        <div className="row row-content align-self-center">
            <div className="col-12 col-sm-6">
                <h2>Our History</h2>
                <p>Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.</p>
                <p>The restaurant traces its humble beginnings to <em>The Frying Pan</em>, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.</p>
            </div>

            <div className="col-12 col-sm">
                <div className="card">
                    <h3 className="card-header bg-primary text-white">Facts at a Glance</h3>
                    <div className="card-body">
                        <dl className="row">
                            <dt className="col-6">Started</dt>
                            <dd className="col-6">3 Feb. 2013</dd>

                            <dt className="col-6">Major Stake Holder</dt>
                            <dd className="col-6">HK Fine Foods Inc.</dd>

                            <dt className="col-6">Last Year's Turnover</dt>
                            <dd className="col-6">$1,250,375</dd>

                            <dt className="col-6">Employees</dt>
                            <dd className="col-6">40</dd>
                        </dl>
                    </div>
                </div>
            </div>

            <div className="col-12">
                <div className="card card-body bg-light">
                    <blockquote className="blockquote text-center">
                        <p class="mb-0 text-left">
                            You'd better cut the pizza in four pieces because
                            I'm not hungry enough to eat six.
                        </p>
                        <footer className="blockquote-footer text-right">
                            Yogi Berra,
                            <cite>
                                The Wit and Wisdom of Yogi Berra,
                                P. Pepe, Diversion Books, 2014
                            </cite>
                        </footer>
                    </blockquote>
                </div>
            </div>
        </div>
    );
}

function RenderLeader({leaders, title}) {
    return (
        <div className="row row-content align-items-center">
            <ul class="list-unstyled">
                {
                    leaders.map(
                        (leader) => {
                            return (
                                <div className="col-12">
                                    <Media>
                                        <Media left middle>
                                            <Media object className="d-flex mr-3 img-thumbnail align-self-center" src={leader.image} alt={leader.name} />
                                        </Media>
                                        <Media body>
                                            <Media heading className="mt-0">
                                                {leader.name}
                                            </Media>

                                            <h5>
                                                {leader.designation}
                                            </h5>
                                            
                                            <p className="d-none d-sm-block">
                                                {leader.description}
                                            </p>
                                        </Media>
                                    </Media>
                                </div>
                            );
                        }
                    )
                }
            </ul>
        </div>
    );
}

function About(props) {
    const leaders = props.leaders;

    return (
        <Container>
            <Navigation />

            <History />

            <RenderLeader leaders={leaders} title="Corporate Leadership"/>
        </Container>
    );
};

export default About;