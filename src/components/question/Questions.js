import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Card, Container, Row, Col } from 'shards-react';
import fetchQuestion from '../actions/fetchQuestion';
import Spinner from '../assets/Spinner';
import Text from '../styledComponents/Text';

const mapStateToProps = (state) => {
    return {
        category: state.category,
        difficulty: state.difficulty,
    }
}

// Style declarations for card container
const cardStyle = {
    backgroundColor: "rgb(56, 62, 78)",
    boxShadow: "6px 6px 11px -5px rgba(0, 0, 0, 0.75)",
    width: "40%",
    height: "400px",
    padding: "20px",
}

class Questions extends Component {
    state = {
        question: null,
    }

    componentWillMount() {
        this.fetchData();
    }

    // Sends request to API to fetch question
    // Provides state category and difficulty as parameters
    async fetchData() {
        let data = await fetchQuestion(this.props.category, this.props.difficulty);
        this.setState({
            question: data,
        })
    }

    render() {
        // If data is null
        // Display Spinner
        if (this.state.question == null) {
            return <Spinner />;
        }

        return (
            <Card style={cardStyle}>
                <Container>
                    <Row style={{height: "150px"}}>
                        {/* Row one, the question */}
                        <Col><Text>{this.state.question.question}</Text></Col>
                    </Row>

                    <Row style={{height: "150px"}}>
                        {/* Row two, if question type is boolean */}
                        {/* Display true/false, otherwise display choices */}
                        {this.state.question.type==="boolean" ? 
                        (<Text>True or False?</Text>) : null}
                    </Row>

                    <Row>
                        <Col xs={6}><Link to="/" style={{textDecoration: "none"}}><Button block theme="light">Back</Button></Link></Col>
                        <Col xs={6}><Button block theme="info" onClick={() => this.fetchData()}>Next Question</Button></Col>
                    </Row>
                </Container>
            </Card>
        );
    }
}
 
export default connect (mapStateToProps) (Questions);