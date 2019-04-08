import React, { Component } from 'react';
import { Button, Card, Container, Row, Col } from 'shards-react';

import SelectCategory from './SelectCategory';
import SelectDifficulty from './SelectDifficulty';

// Style declarations for card container
const cardStyle = {
    backgroundColor: "rgb(56, 62, 78)",
    boxShadow: "6px 6px 11px -5px rgba(0, 0, 0, 0.75)",
    width: "60%",
    height: "20%",
    padding: "20px",
}

// Options select page
class Options extends Component {
    render() { 
        return (  
            <Card style={cardStyle}>

                {/* Three column container */}
                <Container fluid style={{margin: "auto"}}>
                    <Row>

                        <Col><SelectCategory/></Col>
                        <Col><SelectDifficulty/></Col>

                        {/* Submit button, fetches questions from API */}
                        {/* Provides category and difficulty as paramters */}
                        <Col><Button block theme="info">Search</Button></Col>

                    </Row>
                </Container>
            </Card>
        );
    }
}
 
export default Options;