import React from 'react';

import { Container, Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

/*
    Menu: functional component
 */
function RenderMenuItem({dish, onDishSelect}) {
    if (dish === null) {
        return (
            <div></div>
        );
    }        

    return (            
        <Card
            onClick={() => onDishSelect(dish.id)}
        >
            <CardImg className="img-responsive" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
                <CardTitle>
                    <strong>{dish.name}</strong>
                </CardTitle>
            </CardImgOverlay>
        </Card>
    );
}

const Menu = (props) => {
    const menu = props.dishes.map(
        (dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <RenderMenuItem dish={dish} onDishSelect={props.onDishSelect} />
                </div>
            );
        }
    );

    return (
        <Container>
            <div className="row">
                {menu}
            </div>
        </Container>
    );
}

export default Menu;