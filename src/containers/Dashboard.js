import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import BasicInfoCard from '../components/BasicInfoCard.js';
import { loadInfo } from '../actions/infoActions';

import '../stylesheets/Buttons.css';
import '../stylesheets/Dashboard.css';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true
    }
  }

  async componentDidMount() {
      this.setState({ isLoading: true });
      await this.props.loadInfo();
      this.setState({ isLoading: false });
    }

  render() {
    const { info } = this.props.info;
    if (this.state.isLoading) {
      return <div> loading... </div>
    }
    return (
      <div className="dashboard">
        <div className="wrapper">
          <BasicInfoCard info={ info } /> <br/>
          <button type="button" className="button logout" onClick={() => this.props.history.push('/logout')}> Log Out </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    account: state.account.current,
    info: state.info
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({
  loadInfo
}, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dashboard));
