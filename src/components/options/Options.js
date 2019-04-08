import React, { Component } from 'react';
import { connect } from 'react-redux';

import SelectCategory from './SelectCategory';
import SelectDifficulty from './SelectDifficulty';
import fetchQuestion from '../actions/fetchQuestion';

const mapStateToProps = (state) => {
    return {
        categories: state.categories,
        category: state.category,
        difficulty: state.difficulty,
    }
}

// Options select page
class Options extends Component {
    render() { 
        return (  
            <div>
                <SelectCategory/>
                <SelectDifficulty/>
            </div>
        );
    }
}
 
export default connect (mapStateToProps) (Options);