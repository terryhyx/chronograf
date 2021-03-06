import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ExplorerList from './ExplorerList';
import * as viewActions from '../actions/view';

const {string, func} = PropTypes;
const PanelBuilder = React.createClass({
  propTypes: {
    width: string,
    actions: PropTypes.shape({
      createPanel: func.isRequired,
      deleteQuery: func.isRequired,
      addQuery: func.isRequired,
      chooseNamespace: func.isRequired,
      chooseMeasurement: func.isRequired,
      toggleField: func.isRequired,
      groupByTime: func.isRequired,
      applyFuncsToField: func.isRequired,
      chooseTag: func.isRequired,
      groupByTag: func.isRequired,
      toggleTagAcceptance: func.isRequired,
      deletePanel: func.isRequired,
    }).isRequired,
    setActivePanel: func.isRequired,
    activePanelID: string,
  },

  handleCreateExploer() {
    this.props.actions.createPanel();
  },

  render() {
    const {width, actions} = this.props;

    return (
      <div className="panel-builder" style={{width}}>
        <div className="btn btn-block btn-primary" onClick={this.handleCreateExploer}><span className="icon graphline"></span>&nbsp;&nbsp;Create Graph</div>
        <ExplorerList
          actions={actions}
          setActivePanel={this.props.setActivePanel}
          activePanelID={this.props.activePanelID}
        />
      </div>
    );
  },
});

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(viewActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PanelBuilder);
