import React, { Component } from 'react';
import { connect } from 'react-redux';

import SelectCategory from './SelectCategory';

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
                <SelectCategory options={this.props.categories} />
            </div>
        );
    }
}
 
export default connect (mapStateToProps) (Options);