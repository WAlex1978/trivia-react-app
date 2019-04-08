import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { FormSelect } from "shards-react";
import { selectCategory } from '../actions/selectOptions';

const mapStateToProps = (state) => {
  return {
      categories: state.categories,
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
      selectCategory: (category) => {dispatch(selectCategory(category))}
  }
}

class SelectCategory extends Component {
  selectCategory = e => {
    this.props.selectCategory(e.target.value);
  }

  render() { 
    return (
      <Fragment>
        Category:

        {/* Form Select Box */}
        {/* Loops through state categories for options */}
        {/* Calls selectCategory on change */}

        <FormSelect onChange={this.selectCategory}>
          {this.props.categories.map(categories => (
            <option key={categories.id} value={categories.id}>{categories.title}</option>
          ))}
        </FormSelect>

      </Fragment>
    );
  }
}
 
export default connect (mapStateToProps, mapDispatchToProps) (SelectCategory);