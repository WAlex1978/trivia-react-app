import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Button } from 'shards-react';
import fetchQuestion from '../actions/fetchQuestion';
import Spinner from '../assets/Spinner';

const mapStateToProps = (state) => {
    return {
        category: state.category,
        difficulty: state.difficulty,
    }
}

class Question extends Component {
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
            <Fragment>
                {this.state.question.question}
                <Button onClick={() => this.fetchData()}>Next Question</Button>
            </Fragment>
        );
    }
}
 
export default connect (mapStateToProps) (Question);