import React from "react";

import { ReactComponent as UrlIcon } from "../ChetBot/link.svg";

const Link = ({ url, title }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="url-link"
    >
      <UrlIcon className="url-icon" />
      <h1 className="url-header">Go to {title}</h1>
    </a>
  );
};

export default Link;