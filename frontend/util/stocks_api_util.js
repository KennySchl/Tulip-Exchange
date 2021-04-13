// import axios from 'axios'

export const fetchStock = (stockSymbol) =>
  $.ajax({
    url: `/api/stocks/${stockSymbol}`,
  });

export const fetchAllStocksAPI = (APIKey) =>
  $.ajax({
    url: `https://finnhub.io/api/v1/stock/symbol?exchange=US&mic=XNAS&securityType=Common%20Stock&token=${APIKey}`,
  });

export const fetchStockCompanyProfileAPI = (stockSymbol, APIKey) =>
  $.ajax({
    url: `https://finnhub.io/api/v1/stock/profile2?symbol=${stockSymbol}&token=${APIKey}`,
  });

export const fetchStockCompanyNewsAPI = (
  stockSymbol,
  APIKey,
  fromDate,
  toDate
) =>
  $.ajax({
    url: `https://finnhub.io/api/v1/company-news?symbol=${stockSymbol}&from=${fromDate}&to=${toDate}&token=${APIKey}`,
  });

export const fetchStockCurrentPriceAPI = (stockSymbol, APIKey) =>
  $.ajax({
    url: `https://finnhub.io/api/v1/quote?symbol=${stockSymbol}&token=${APIKey}`,
  });
