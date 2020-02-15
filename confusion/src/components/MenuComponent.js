import React from 'react';

import { Container } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

import { Link } from 'react-router-dom';

import { Loading } from './LoadingComponent';

function Navigation() {
    return (
        <div className="row">
            <div className="col-12">
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to="/home">Home</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <Link to="#">Menu</Link>
                    </BreadcrumbItem>
                </Breadcrumb>
            </div>
            <div className="col-12">
                <h3>Menu</h3>
                <hr />
            </div>
        </div>
    );
}

/*
    Menu: functional component
 */
function RenderMenuItem({dish}) {
    if (dish === null) {
        return (
            <div></div>
        );
    }        

    return (            
        <Card>
            <Link to={`/menu/${dish.id}`}>            
                <CardImg className="img-responsive" src={dish.image} alt={dish.name} />
                <CardImgOverlay>
                    <CardTitle>
                        <strong>{dish.name}</strong>
                    </CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}

const Menu = (props) => {
    const RenderMenu = (props) => {
        if (props.errMsgs) 
            return (
                <div className="row row-content justify-content-center">
                    <h4>{props.errMsgs}</h4>
                </div>
            );
        else if (props.isLoading)
            return (
                <div className="row row-content justify-content-center">
                    <Loading />
                </div>
            );
        else if (props.dishes.length === 0 ) 
            return <div></div>;

        const menu = props.dishes.map(
            (dish) => {
                return (
                    <div key={dish.id} className="col-12 col-md-5 m-1">
                        <RenderMenuItem dish={dish} />
                    </div>
                );
            }
        );

        return (
            <div className="row justify-content-center">
                {menu}
            </div>
        );
    }

    return (
        <Container>
            <Navigation />

            <RenderMenu {...props} />
        </Container>
    );
}

export default Menu;