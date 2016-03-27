import {connect} from 'react-redux';

import App from '../components/app.react';

const mapStateToProps = (state) => {
  return {
    data: state.reducer,
  };
};

const mapDispatchToProps = () => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
