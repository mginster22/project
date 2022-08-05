import React from "react";
import { PropTypes } from "prop-types";

const CiaoHeading = (props) => {
  const { content, title, className } = props;
  return (
    <h1 className={className} title={title}>
      {content}
    </h1>
  );
};

CiaoHeading.defaultProps = {
  content: "asdsadas",
};

CiaoHeading.propTypes = {
  content: PropTypes.string,
};

export default CiaoHeading;
