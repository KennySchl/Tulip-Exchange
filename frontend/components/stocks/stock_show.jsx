import React, { useState, useEffect } from "react";
// import { fetchStockCurrentPriceAPI } from "../../util/stocks_api_util";
import * as StockAPI from "../../util/stocks_api_util";
import CompanyNews from "./stock_show_components/company_news";
import CompanyAbout from "./stock_show_components/company_about";
import ProtNavBarContainer from "../nav_bar/prot_nav_bar_container";
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine,
} from "react-sparklines";

const StockShow = ({ stockSymbol }) => {
  const [currentPrice, setCurrentPrice] = useState({});
  const [companyProfile, setCompanyProfile] = useState({});
  const [companyNews, setCompanyNews] = useState({});

  const today = new Date();
  const todayISO = today.toISOString().split("T")[0];
  const oneWeekAgoISO = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() - 7
  )
    .toISOString()
    .split("T")[0];

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
  }, []);

  // console.log(stockSymbol);
  // console.log(currentPrice);
  console.log(companyProfile);
  // console.log(companyNews);
  // console.log(todayISO);
  // console.log(oneWeekAgoISO);
  return (
    <div>
      <ProtNavBarContainer />
      <h1>{companyProfile.name}</h1>
      <h1>{currentPrice.c}</h1>
      <Sparklines
        data={[5, 10, 5, 20, 8, 15]}
        limit={5}
        width={1000}
        height={200}
        margin={50}
      >
        <SparklinesLine color="blue" />
        {/* <SparklinesSpots /> */}
      </Sparklines>
      <CompanyAbout companyProfile={companyProfile} />
      <CompanyNews companyNews={companyNews} />
    </div>
  );
};

export default StockShow;
