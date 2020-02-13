import React from 'react';

import { Container } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

import { Link } from 'react-router-dom';

function Path() {
    return (
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
        <Container>
            <div className="row">
                <Path />
            </div>
            <div className="row justify-content-center">
                {menu}
            </div>
        </Container>
    );
}

export default Menu;