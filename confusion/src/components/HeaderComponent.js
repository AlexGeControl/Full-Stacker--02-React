import React from 'react';

import { Jumbotron, Container } from 'reactstrap';

function Header() {
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
                            <img className="img-fluid" />
                        </div>
                    </div>
                </Container>
            </Jumbotron>
        </div>
    );
}

export default Header;