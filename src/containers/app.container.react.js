import { connect } from 'react-redux';

import App from '../components/app.react';

const mapStateToProps = (state) => {
  return {
    app: state.app,
  };
};

const mapDispatchToProps = () => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
