import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import SelectCategory from './SelectCategory';
import SelectDifficulty from './SelectDifficulty';

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
            <Fragment>
                <SelectCategory/>
                <SelectDifficulty/>
            </Fragment>
        );
    }
}
 
export default connect (mapStateToProps) (Options);