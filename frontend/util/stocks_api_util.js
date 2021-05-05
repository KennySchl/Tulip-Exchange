export const fetchStock = (stockSymbol) =>
  $.ajax({
    url: `/api/stocks/${stockSymbol}`,
  });

export const fetchStocks = () =>
  $.ajax({
    url: "/api/stocks",
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

export const fetchStockIntradayAPI = (stockSymbol, from, to, APIKey) =>
  $.ajax({
    url: `https://finnhub.io/api/v1/stock/candle?symbol=${stockSymbol}&resolution=5&from=${from}&to=${to}&token=${APIKey}`,
  });

export const fetchAllMarketNewsAPI = (APIKey) =>
  $.ajax({
    url: `https://finnhub.io/api/v1/news?category=general&token=${APIKey}`,
  });
