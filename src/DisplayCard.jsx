import React from 'react';
import { Card } from 'react-bootstrap';

const DisplayCard = (props) => {
    return (
        <Card className='card'>
            <Card.Body>
                <Card.Title> <h2>{props.name} </h2></Card.Title>
                <Card.Title>{props.email}</Card.Title>
                <Card.Title>{props.phone}</Card.Title>
                <Card.Title>{props.address}</Card.Title>
                <Card.Title>{props.degreeProgram}</Card.Title>
            </Card.Body>
        </Card>
    )
}


export default DisplayCard;