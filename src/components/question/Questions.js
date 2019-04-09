import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Card, Container, Row, Col } from 'shards-react';
import { Collapse } from 'shards-react';
import fetchQuestion from '../actions/fetchQuestion';
import Spinner from '../assets/Spinner';
import Text from '../styledComponents/Text';

const mapStateToProps = (state) => {
    return {
        category: state.category,
        difficulty: state.difficulty,
    }
}

// Style declarations for card
const cardStyle = {
    backgroundColor: "rgb(56, 62, 78)",
    boxShadow: "6px 6px 11px -5px rgba(0, 0, 0, 0.75)",
    width: "40%",
    height: "400px",
    padding: "20px",
}

// Style declarations for content container
const containerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%"
}

// Array to hold multiple choice questions
var multiChoice = [];

class Questions extends Component {
    state = {
        question: null,
        collapse: false,
    }

    componentWillMount() {
        this.fetchData();
    }

    toggle = () => {
        this.setState({ collapse: !this.state.collapse });
    }
    
    // Sends request to API to fetch question
    // Provides state category and difficulty as parameters
    async fetchData() {

        // Collapse answer before fetching next question
        this.setState({collapse: false});
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
        // Ignores if multiChoice already has items
        // Store answers into an array then shuffle array
        if (this.state.question.type==="multiple" && multiChoice.length===0) {

            // Loops through each incorrect answer and pushes into array
            this.state.question.incorrect_answers.map((ans) => (multiChoice.push(ans)));

            // Push correct answer into array then shuffle array
            multiChoice.push(this.state.question.correct_answer);
            multiChoice.sort(() => { return 0.5 - Math.random() })
        }

        return (
            <Card style={cardStyle}>
                <Container style={containerStyle}>
                    <Row>
                        {/* Row one, the question */}
                        <Col><Text>{this.state.question.question}</Text></Col>
                    </Row>

                    <Row>
                        {/* Row two, if question type is boolean */}
                        {/* Display true/false, otherwise display choices */}
                        {this.state.question.type==="boolean" ? 
                        (<Text size="1.3rem">True or False?</Text>) : 
                        
                        (multiChoice.map((ans, i) => (
                            <Col key={i} xs={6}><Text size="1.3rem" style={{margin: "10px auto 10px auto"}}>{ans}</Text></Col>
                        )))}
                        {/* Loop through each answer choice in multiple choice array */}
                        {/* Display in two column layout */}
                    </Row>

                    <Row>
                        {/* Row three, show answer button */}
                        {/* Shows the correct answer on click */}
                        <Col xs={12} style={{margin: "2px auto 2px auto"}}>
                            <Button  block theme="info" onClick={() => this.toggle()}>Show Answer</Button>
                            <Collapse open={this.state.collapse}>
                                <Text size="1.3rem">{this.state.question.correct_answer}</Text>
                            </Collapse>
                        </Col>

                        {/* Back and next question buttons */}
                        {/* Adjusts to one column on small displays */}
                        <Col xs={12} lg={6} style={{margin: "2px auto 2px auto"}}><Link to="/" style={{textDecoration: "none"}}><Button block theme="light">Back</Button></Link></Col>
                        <Col xs={12} lg={6} style={{margin: "2px auto 2px auto"}}><Button block theme="info" onClick={() => this.fetchData()}>Next Question</Button></Col>
                    </Row>
                </Container>
            </Card>
        );
    }
}
 
export default connect (mapStateToProps) (Questions);