import React, { useState, useEffect } from "react";
// import { fetchStockCurrentPriceAPI } from "../../util/stocks_api_util";
import * as StockAPI from "../../util/stocks_api_util";
import { Sparklines, SparklinesLine, SparklinesReferenceLine} from "react-sparklines";

const StockShow = ({ stockSymbol }) => {
  const [currentPrice, setCurrentPrice] = useState({});
  const [companyProfile, setCompanyProfile] = useState({});
  const [companyNews, setCompanyNews] = useState({});

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
      window.finnhubAPIKey
    ).then((res) => setCompanyNews(res));
  }, []);

  console.log(stockSymbol);
  console.log(currentPrice);
  console.log(companyProfile);
  console.log(companyNews);

  return (
    <div>
      <Sparklines data={[5, 10, 5, 20, 8, 15]} limit={5} width={100} height={20} margin={5}>
        <SparklinesLine color="blue" />
        <SparklinesReferenceLine type="mean" />
        {/* <SparklinesSpots /> */}
      </Sparklines>
    </div>
  );
};

export default StockShow;
