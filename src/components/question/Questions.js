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

// Array to hold multiple choice questions
var multiChoice = [];

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

        // Empty multiple choice array
        multiChoice = [];
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

        // If the question is a multiple choice
        // Store answers into an array then shuffle array
        if (this.state.question.type==="multiple") {

            // Loops through each incorrect answer and pushes into array
            this.state.question.incorrect_answers.map((ans) => (multiChoice.push(ans)));

            // Push correct answer into array then shuffle array
            multiChoice.push(this.state.question.correct_answer);
            multiChoice.sort(() => { return 0.5 - Math.random() })
        }

        return (
            <Card style={cardStyle}>
                <Container>
                    <Row style={{height: "180px"}}>
                        {/* Row one, the question */}
                        <Col><Text>{this.state.question.question}</Text></Col>
                    </Row>

                    <Row style={{height: "120px"}}>

                        {/* Row two, if question type is boolean */}
                        {/* Display true/false, otherwise display choices */}
                        {this.state.question.type==="boolean" ? 
                        (<Text>True or False?</Text>) : 
                        
                        (multiChoice.map((ans, i) => (<Col key={i} xs={6}><Text size="1.3rem"> {ans}</Text></Col>)))}
                        {/* Loop through each answer choice in multiple choice array */}
                        {/* Display in two column layout */}

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