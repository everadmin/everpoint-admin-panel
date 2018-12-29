import React from "react";
import PropTypes from "prop-types";

import { InDevelop } from "../../components/InDevelop/InDevelop";

export const News = () => {
  return (
    <div>
      <InDevelop to="about" />
    </div>
  );
};

News.propTypes = {
  component: PropTypes.bool,
};

export default News;
