// import axios from 'axios'

export const fetchStock = (stockSymbol) =>
  $.ajax({
    url: `/api/stocks/${stockSymbol}`,
  });

// export const fetchStockAPI = (stockSymbol, APIKey) =>
//   $.ajax({
//     url: `https://api.tiingo.com/tiingo/daily/${stockSymbol}/prices?token=57b76ded246e717563e0ddb12ef673f00f8f31b0`,
//   });

export const fetchAllStocksAPI = (APIKey) =>
  $.ajax({
    url: `https://finnhub.io/api/v1/stock/symbol?exchange=US&mic=XNYS&token=${APIKey}`,
  });

export const fetchStockCompanyProfileAPI = (stockSymbol, APIKey) =>
  $.ajax({
    url: `https://finnhub.io/api/v1/stock/profile2?symbol=${stockSymbol}&token=${APIKey}`,
  });

export const fetchStockCompanyNewsAPI = (stockSymbol, APIKey) =>
  $.ajax({
    url: `https://finnhub.io/api/v1/company-news?symbol=${stockSymbol}&from=2021-03-01&to=2021-03-09&token=${APIKey}`,
  });
//FIX DATE TO BE PRESENT DAY UNTIL ONE WEEK BEFORE^^^^^^^^^^^

export const fetchStockCurrentPriceAPI = (stockSymbol, APIKey) =>
  $.ajax({
    url: `https://finnhub.io/api/v1/quote?symbol=${stockSymbol}&token=${APIKey}`,
  });
