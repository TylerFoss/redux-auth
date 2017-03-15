import React from 'react';
import { connect } from 'react-redux';

const AuthenticatedRoutes = ({ user, children }) => (
  <div>
    { user._id ? children : null }
  </div>
);

const mapStateToProps = (state) => {
  return { user: state.user }
}

export default connect(mapStateToProps)(AuthenticatedRoutes);
