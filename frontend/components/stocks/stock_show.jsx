import React, { useState, useEffect } from "react";
import * as StockAPI from "../../util/stocks_api_util";
import CompanyNews from "./stock_show_components/company_news";
import CompanyAbout from "./stock_show_components/company_about";
import ProtNavBarContainer from "../nav_bar/prot_nav_bar_container";
import StockChart from "./stock_show_components/stock_chart";

const StockShow = ({ stockSymbol }) => {
  const [currentPrice, setCurrentPrice] = useState({});
  const [companyProfile, setCompanyProfile] = useState({});
  const [companyNews, setCompanyNews] = useState({});
  const [intraDayData, setIntraDayData] = useState([]);
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
  const dateNow = Math.floor(Date.now() / 1000);
  const d = new Date().setHours(3, 0, 0, 0) / 1000;

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
      d,
      dateNow,
      window.finnhubAPIKey
    ).then((res) => setIntraDayData(res));
    setTimeout(() => {
      setLoading(false);
    }, 1000);
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
    return null;
  } else {
    return (
      <div>
        <ProtNavBarContainer />
        <h1>{companyProfile.name}</h1>
        <StockChart currentPrice={currentPrice} intraDayData={intraDayData} />
        <CompanyAbout companyProfile={companyProfile} />
        <CompanyNews companyNews={companyNews} />
      </div>
    );
  }
};

export default StockShow;
