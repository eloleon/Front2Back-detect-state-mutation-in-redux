import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../Actions';

class HomePage extends Component {
  render () {
    return (
      <div>
        <p>Text from state: {this.props.text}</p>
        <p>
          <button onClick={() => this.props.actions.doNotMutate()}>This button won't mutate state</button>
          <button onClick={() => this.props.actions.mutate()}>This button will mutate state</button>
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    text: state.text
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
