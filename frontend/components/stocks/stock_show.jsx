import React, { useState, useEffect } from "react";
import * as StockAPI from "../../util/stocks_api_util";
import CompanyNews from "./stock_show_components/company_news";
import CompanyAbout from "./stock_show_components/company_about";
import ProtNavBarContainer from "../nav_bar/prot_nav_bar_container";
import StockChart from "./stock_show_components/stock_chart";
import Loader from "react-loader-spinner";

const StockShow = ({ stockSymbol }) => {
  const [currentPrice, setCurrentPrice] = useState({});
  const [companyProfile, setCompanyProfile] = useState({});
  const [companyNews, setCompanyNews] = useState({});
  const [intraDayData, setIntraDayData] = useState({});
  const [loading, setLoading] = useState(true);

  const today = new Date();
  const todayISO = today.toISOString().split("T")[0];
  const oneWeekAgoISO = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() - 7
  )
    .toISOString()
    .split("T")[0];
  // const dateNow = Math.floor(Date.now() / 1000);
  // const d = new Date(dateNow - 86400).setHours(3, 0, 0, 0);
  // const oneDay = 86400
  // const w = new Date(dateNow - oneDay * 7).setHours(3,0,0,0)/1000;
  const marketOpen = new Date().setHours(3, 0, 0, 0) / 1000;
  const marketClose = new Date().setHours(12, 0, 0, 0) / 1000;

  useEffect(() => {
    StockAPI.fetchStockCurrentPriceAPI(
      stockSymbol,
      window.finnhubAPIKey
    ).then((res) => setCurrentPrice(res));
    StockAPI.fetchStockCompanyProfileAPI(
      stockSymbol,
      window.finnhubAPIKey
    ).then((res) => setCompanyProfile(res));
    StockAPI.fetchStockCompanyNewsAPI(
      stockSymbol,
      window.finnhubAPIKey,
      oneWeekAgoISO,
      todayISO
    ).then((res) => setCompanyNews(res));
    StockAPI.fetchStockIntradayAPI(
      stockSymbol,
      marketOpen,
      marketClose,
      window.finnhubAPIKey
    )
      .then((res) => setIntraDayData(res))
      .then(() => setLoading(false));
    return () => {
      setLoading(true);
    };
  }, [stockSymbol]);

  // console.log(intraDayData);
  // console.log(stockSymbol);
  // console.log(currentPrice);
  // console.log(companyProfile);
  // console.log(companyNews);
  // console.log(todayISO);
  // console.log(oneWeekAgoISO);
  // console.log(intraDayData);
  // console.log(intraDayTime);

  if (loading) {
    return (
      <div className="loader">
        <Loader type="Grid" color="rgb(0,200,5)" height={80} width={80} />
      </div>
    );
  } else {
    return (
      <div className="stock-show">
        <ProtNavBarContainer />
        <div className="stock-show-contain">
          <div className="stock-show-box">
            <h1 className="company-name">{companyProfile.name}</h1>
            <StockChart
              currentPrice={currentPrice}
              intraDayData={intraDayData}
              className="stock-chart"
            />
            <CompanyAbout companyProfile={companyProfile} />
            <CompanyNews companyNews={companyNews} className="company-new" />
          </div>
        </div>
      </div>
    );
  }
};

export default StockShow;
