import React, { Component } from 'react';
import { Button, Card, Container, Row, Col } from 'shards-react';
import { Link } from 'react-router-dom';

import SelectCategory from './SelectCategory';
import SelectDifficulty from './SelectDifficulty';

// Style declarations for card container
const cardStyle = {
    backgroundColor: "rgb(56, 62, 78)",
    boxShadow: "6px 6px 11px -5px rgba(0, 0, 0, 0.75)",
    width: "60%",
    height: "120px",
    padding: "20px",
}

// Options select page
class Options extends Component {
    render() { 
        return (  
            <Card className="expand" style={cardStyle}>

                {/* Three column container */}
                <Container fluid style={{margin: "auto"}}>
                    <Row>

                        {/* Adjusts to two column layout on smaller displays */}
                        <Col xs={6} lg={4} style={{margin: "2px auto 2px auto"}}><SelectCategory/></Col>
                        <Col xs={6} lg={4} style={{margin: "2px auto 2px auto"}}><SelectDifficulty/></Col>

                        {/* Submit button, fetches questions from API */}
                        {/* Provides category and difficulty as paramters */}
                        <Col xs={12} lg={4} style={{margin: "2px auto 2px auto"}}>
                            <Link to="/questions" style={{textDecoration: "none"}}>
                                <Button block theme="info">Search</Button>
                            </Link>
                        </Col>

                    </Row>
                </Container>
            </Card>
        );
    }
}
 
export default Options;