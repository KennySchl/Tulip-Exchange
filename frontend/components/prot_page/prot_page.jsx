import React, { useState, useEffect } from "react";
import { fetchAllMarketNewsAPI } from "../../util/stocks_api_util";
import ProtNavBarContainer from "../nav_bar/prot_nav_bar_container";
import CompanyNews from "../stocks/stock_show_components/company_news";
import MainPageWatchlistContainer from "../watchlists/main_page_watchlist_container";

const ProtPage = () => {
  const [companyNews, setCompanyNews] = useState([]);

  useEffect(() => {
    fetchAllMarketNewsAPI(window.finnhubAPIKey).then((res) =>
      setCompanyNews(res)
    );
    return () => {
      setCompanyNews([]);
    };
  }, []);

  return (
    <div className="protected-main">
      <ProtNavBarContainer />
      <div className="prot-page-container">
        <div className="prot-page-contain">
          <h1 className="welcome-to-prot">Welcome to Tulip Exchange</h1>
          <div className="graph-list">
            <img className="prot-page-bkg" src={window.protpagebkg} />
          </div>
          <CompanyNews companyNews={companyNews} />
        </div>
        <MainPageWatchlistContainer />
      </div>
    </div>
  );
};
export default ProtPage;
