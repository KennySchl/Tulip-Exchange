export const fetchStock = (stockSymbol) =>
  $.ajax({
    url: `/api/stocks/${stockSymbol}`,
  });

export const fetchStockAPI = (stockSymbol) =>
  $.ajax({
    url:`https://api.tiingo.com/tiingo/daily/${stockSymbol}/prices?token=57b76ded246e717563e0ddb12ef673f00f8f31b0`
  });
