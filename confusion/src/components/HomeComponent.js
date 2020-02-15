import React from 'react';

import { Container } from 'reactstrap';
import { Media } from 'reactstrap';

import { Loading } from './LoadingComponent';

function RenderItem(props) {
    const { title, item, isLoading, errMsgs } = props;

    const RenderMedia = ({ title, item }) => {
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

    if (errMsgs) 
        return (
            <div className="row row-content justify-content-center">
                <h4>{errMsgs}</h4>
            </div>
        );
    else if (isLoading)
        return (
            <div className="row row-content justify-content-center">
                <Loading />
            </div>
        );
    else if (item === undefined) 
        return <div></div>;
     
    return <RenderMedia title={title} item={item} />
}

function Home(props) {
    return (
        <Container>
            <RenderItem 
                title="Our Lipsmacking Culinary Creations" item={props.dish}
                isLoading={props.dishIsLoading} errMsgs={props.dishErrMsgs}
            />
            <RenderItem title="This Month's Promotions" item={props.promotion}  />
            <RenderItem title="Meet our Culinary Specialists" item={props.leader}  />
        </Container>
    );
}

export default Home;