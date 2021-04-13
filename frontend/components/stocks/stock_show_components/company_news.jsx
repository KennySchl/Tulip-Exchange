import React from "react";
import CompanyNewsItem from "./company_news_item";

const CompanyNews = ({ companyNews }) => {
  const news = Object.values(companyNews).map((article, i) => {
    return (
      <CompanyNewsItem
        key={i}
        url={article.url}
        source={article.source}
        headline={article.headline}
        summary={article.summary}
        image={article.image}
      />
    );
  });

  return (
    <div>
      <h1>News</h1>
      {news.slice(0,3)}
    </div>
  );
};
export default CompanyNews;
