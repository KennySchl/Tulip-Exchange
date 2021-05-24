import React from "react";

const CompanyNewsItem = ({ url, source, headline, summary, image }) => {
  return (
    <div className="company-news-item-contain">
      <a href={url} className="company-news-item-link" target="_blank">
        <div className="company-news-item-box">
        <h3 className="company-news-item-source">{source}</h3>
        <h2 className="company-news-item-headline">{headline}</h2>
        <p className="company-news-item-summary">
          {summary.split("").slice(0, 75).join("") + "..."}
        </p>
        </div>
        <img
          src={image}
          width="200px"
          height="135px"
          className="company-news-item-img"
        />
      </a>
    </div>
  );
};

export default CompanyNewsItem;
