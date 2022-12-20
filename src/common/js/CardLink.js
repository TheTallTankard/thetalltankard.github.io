import React from "react";
import Card from 'react-bootstrap/Card';

class CardLink extends React.Component {
    constructor(){
        super();
    }

    render(){
        const { title, desc, href } = this.props;
        return (
            <a className='card-wrapper' href={href}>
                <Card>
                    <Card.Header>{title}</Card.Header>
                    <Card.Body>{desc}</Card.Body>
                    <Card.Footer></Card.Footer>
                </Card>
          </a>
        )
    }
}

export default CardLink;