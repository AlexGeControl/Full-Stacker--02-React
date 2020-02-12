import React from 'react';

import { Container } from 'reactstrap';
import { Media } from 'reactstrap';

function RenderItem({item, title}) {
    return (
        <div className="row row-content align-items-center">
            <div className="col-12 col-sm-4 order-sm-last col-md-3">
                <h3>{title}</h3>
            </div>
            <div className="col-12 col-sm order-sm-first col-md">
                <Media>
                    <img className="d-flex mr-3 img-thumbnail align-self-center" src={item.image} alt={item.name} />
                    <Media body>
                        <Media heading className="mt-0">
                            {item.name}
                            <span className="badge badge-danger">{item.label}</span>
                            <span className="badge badge-pill badge-secondary">{item.price}</span>
                        </Media>

                        <p className="d-none d-sm-block">
                            {item.description}
                        </p>
                    </Media>
                </Media>
            </div>
        </div>
    );
}

function Home(props) {    
    return (
        <Container>
            <RenderItem item={props.dish} title="Our Lipsmacking Culinary Creations" />
            <RenderItem item={props.promotion} title="This Month's Promotions" />
            <RenderItem item={props.leader} title="Meet our Culinary Specialists" />
        </Container>
    );
}

export default Home;