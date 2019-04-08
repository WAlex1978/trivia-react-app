import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { FormSelect } from "shards-react";
import { selectDifficulty } from '../actions/selectOptions';

const mapDispatchToProps = (dispatch) => {
  return {
      selectDifficulty: (dif) => {dispatch(selectDifficulty(dif))}
  }
}

class SelectDifficulty extends Component {

  // Updates state difficulty to selected difficulty option
  selectDifficulty = e => {
    this.props.selectDifficulty(e.target.value);
  }

  render() { 
    return (
      <Fragment>
        Difficulty:

        {/* Calls selectDifficulty on change */}
        {/* provides selected difficulty as parameter */}

        <FormSelect onChange={this.selectDifficulty}>
            <option value={'easy'}>Easy</option>
            <option value={'medium'}>Medium</option>
            <option value={'hard'}>Hard</option>
        </FormSelect>

      </Fragment>
    );
  }
}
 
export default connect (null, mapDispatchToProps) (SelectDifficulty);