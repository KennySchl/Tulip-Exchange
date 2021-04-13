import React from "react";

const CompanyNewsItem = ({ url, source, headline, summary, image }) => {
  return (
    <div>
      <a href={url}>
        <h3>{source}</h3>
        <h2>{headline}</h2>
        <p>{summary.split("").slice(0, 75).join("") + "..."}</p>
        <img src={image} width="200px" height="135px" />
      </a>
    </div>
  );
};

export default CompanyNewsItem;
