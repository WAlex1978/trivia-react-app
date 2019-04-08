import React, { Component } from 'react';
import { connect } from 'react-redux';

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
                Hi {this.props.category}
            </div>
        );
    }
}
 
export default connect (mapStateToProps) (Options);