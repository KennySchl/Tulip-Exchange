import * as StocskUtil from "../util/stocks_api_util";

export const RECEIVE_STOCK = "RECEIVE_STOCK";

const receiveStock = (stock) => ({
  type: RECEIVE_STOCK,
  stock,
});

export const fetchStock = (stockSymbol) => (dispatch) =>
  StocskUtil.fetchStock(stockSymbol).then((stock) =>
    dispatch(receiveStock(stock))
  );

export const fetchStockAPI = (stockSymbol) => (dispatch) =>
  StocskUtil.fetchStockAPI(stockSymbol).then((stock) =>
    dispatch(receiveStock(stock))
  );
