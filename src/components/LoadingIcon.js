import React, { Component } from "react";
import PropTypes from "prop-types";

const LoadingIcon = isLoading => {
  return (
    <div className="loadingIcon d-flex flex-column align-items-center justify-content-center">
      <span className="fa fa-refresh fa-4x fa-spin" />
    </div>
  );
};

LoadingIcon.proptypes = {
  isLoading: PropTypes.bool.isRequired
};

export default LoadingIcon;
