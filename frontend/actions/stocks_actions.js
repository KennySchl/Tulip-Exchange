import * as StocksUtil from "../util/stocks_api_util";

export const RECEIVE_STOCK = "RECEIVE_STOCK";
export const RECEIVE_STOCKS = "RECEIVE_STOCKS";

const receiveStock = (stock) => ({
  type: RECEIVE_STOCK,
  stock,
});

const receiveStocks = (stocks) => ({
  type: RECEIVE_STOCKS,
  stocks,
});

export const fetchStock = (stockSymbol) => (dispatch) =>
  StocksUtil.fetchStock(stockSymbol).then((stock) =>
    dispatch(receiveStock(stock))
  );

// export const fetchStockAPI = (stockSymbol) => (dispatch) =>
//   StocksUtil.fetchStockAPI(stockSymbol).then((stock) =>
//     dispatch(receiveStock(stock))
//   );

export const fetchStocks = () => (dispatch) =>
  StocksUtil.fetchStocks().then((stocks) =>
    dispatch(receiveStocks(stocks))
  );

// export const fetchStockCurrentPriceAPI = (stockSymbol, APIKey) =>
//   StocksUtil.fetchStockCurrentPriceAPI(
//     stockSymbol,
//     APIKey
//   ).then((stockPrices) => dispatch(receiveStock(stockPrices)));
